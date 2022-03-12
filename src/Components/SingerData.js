// import { Card } from 'react-bootstrap';

const SingerData = ({bio}) => {

  return (
 

<figure className="card_data">
    <div className="card_img">
  
       <img src={bio.strArtistThumb }  alt="Texto alternativo" width="40rem" height="40rem" />
   
      
    </div>
    <div className="card_text">
        <h2>{bio.strArtist}</h2>
        <hr />
        <figcaption>{bio.strBiographyES}</figcaption>
    </div>
</figure>
 
  )
}

export default SingerData