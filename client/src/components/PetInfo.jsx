import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import DeleteButton from "./DeleteButton"
export default props => {
    const [ pet, setPet ] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets/"+props.id)
        .then(res=>setPet(res.data))
        .catch(err => console.log("Something went wrong", err))
    }, [])
    return (
        <div>
            <h2>{pet.name}</h2>
            <p>Type: {pet.type}</p>
            <p>Description: {pet.desc}</p>
            <p>Skills:</p>
            <p>{pet.skill1} | {pet.skill2} | {pet.skill3}</p>
            <DeleteButton petId= {props.id} successCallback={ () => navigate("/")} />
        </div>
    )
}