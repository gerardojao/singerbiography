import {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SingerData from "./SingerData"

import SongForm from "./SongForm"
import Loader from "./Loader"
import Message from "./Message"


const SongSearcher = () => {

    const [search, setSearch] = useState(null)
    const [bio, setBio] = useState({
        strBiographyES:"",
        strArtist:"",
        strArtistThumb:""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] =useState(false)

    useEffect(() => {
        if(search===null)return
      
       setLoading(true)
       const getSinger = async()=>{
           try {
                 //console.log("Importing Singer");
        
       const res = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search.artist}`)
       const response = await res.json()
    
       const data = response.artists[0]
    
       console.log(data);
       let newBio ={
        strBiographyES:data.strBiographyES,
        strArtist:data.strArtist,
        strArtistThumb:data.strArtistThumb
       }
       setBio(
           newBio
       )
    //    console.log(bio);
    setLoading(false)
           } catch (err) {
            setLoading(false)
              setError(true)
             setSearch(null)
              setTimeout(() => {
                  setError(false)

              }, 2000);
              
           }
      
    }
    getSinger()

    }, [search])
    
    const handleSearch = (data) =>{
       //console.log(data);
        setSearch(data)

    }
    console.log(search);
  return (
  <div className="main_container">  
  <div className="home__content">
    <h1 style={{color:"white"}}>Singer Biography</h1>
    <Container fluid = "md">  
        <Row>   
        <Col>
            <SongForm handleSearch={handleSearch}/><br /><br />
            {loading 
                ?  <Loader /> 
                : search != null 
                        ? <SingerData search={search} bio={bio} />
                        : <h2 style={{color:"white"}}>NO DATA</h2> }
         {error && <Message msg={`Error: Data not found `} bgColor="#dc3545" />}
        
        </Col>    
    

        
        </Row>
    </Container>
    </div>
  </div>
   
  )
}

export default SongSearcher