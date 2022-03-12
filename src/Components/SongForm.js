import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
//import {getSinger} from "../api"

const SongForm = ({handleSearch}) => {

    const [form, setForm] = useState({
        artist:""
        // ,song:""
    })

   const handleChange = e=>{
    //    console.log(e.target.value);
       setForm({
            ...form,
           [e.target.name]:e.target.value
        })
    }
    const handleSubmit=e=>{
        e.preventDefault()
        // if(!form.artist ||!form.song) {
        if(!form.artist) {
            alert("Incomplete Data")
            return
        }
        //console.log("desde handlesubmit");
        //getSinger(form.artist)
        handleSearch(form)
    }
   
  return (
<Form onSubmit={handleSubmit} className="form_container">
    <Form.Control 
        type="text" 
        placeholder="Search Singer" 
        name="artist"
        onChange={handleChange}
        value={form.artist}
    />
    
    {/* <Form.Control 
        type="text" 
        placeholder="Search Song" 
        name= "song" 
        onChange={handleChange}
        value={form.song}
    /> */}
    <Button variant="dark" className="button" type="submit" >
        Search
    </Button>
</Form>
  )
}

export default SongForm