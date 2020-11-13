import { useState } from 'react'
import axios from 'axios';
import PetForm from '../components/PetForm'
import { set } from 'mongoose';
export default props => {
    const { successCallback } = props
    const [error, setError] = useState("")
    const addPet = (pet) =>{
        axios.post('http://localhost:8000/api/pets/new', pet)
        .then(res=> res.data.message ? setError("Name must be unique") : successCallback())
        .catch(err=>setError(err))
    }
    return (
        <>
        {error ? <p>{error}</p> : ""}
        <PetForm initialTitle="" initialPrice="" initialDesc="" initialSkill1="" initialSkill2="" initialSkill3="" onSubmitProp={addPet} />
        
        </>
    )
}