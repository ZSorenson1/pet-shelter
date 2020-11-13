import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetForm from '../components/PetForm'
export default props => {
    const { id, successCallback } = props;
    const [pet, setPet] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            });
    }, [])

    const submitHandler = (pet) => {
        axios.put('http://localhost:8000/api/Pets/'+id+"/edit", pet)
        .then(res=> successCallback())
    }
    return (
        <>
        {loaded && <PetForm initialName={pet.name} initialType={pet.type} initialDesc={pet.desc} initialSkill1={pet.skill1} initialSkill2={pet.skill2} initialSkill3={pet.skill3} onSubmitProp={submitHandler} />}
        </>
    )
}