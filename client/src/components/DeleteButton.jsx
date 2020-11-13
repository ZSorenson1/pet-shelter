import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { set } from 'mongoose';

export default props => {
    const {petId, successCallback} = props;
    const [ pet, setPet ] = useState([]);
    const [ loaded, setLoaded] = useState(false);
    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets/"+petId)
        .then(res=>setPet(res.data),
        setLoaded(true))
        .catch(err => console.log("Something went wrong", err))
    }, [])

    const deletePet = e => {
        axios.delete('http://localhost:8000/api/pets/' + petId + '/delete')
        .then(res=>{
            successCallback();
        })
    }
    return (
        <>
        {loaded && <button className="bg-danger" onClick={deletePet}>
        Adopt {pet.name}</button>}
    </>
    )
}
