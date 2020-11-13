import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'
import PetList from '../components/PetList'

export default () => {
    const [ pets, setPets ] = useState([]);
    const removeFromDom = id => {
        setPets(pets.filter(pet => pet._id != id));
    }

    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets")
        .then(res=>setPets(res.data)
        )}, [])
        
        
    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>These pets are looking for a good home.</h2>
            <Link to="/pets/add">Click Here to Add a New Pet</Link>
            <hr/>
            <PetList pets={pets} removeFromDom={removeFromDom}/>
        </div>
    )
}