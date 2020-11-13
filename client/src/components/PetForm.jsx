import React, { useState, useEffect } from 'react'

export default props => {
    const { initialName, initialType, initialDesc, initialSkill1, initialSkill2, initialSkill3, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [desc, setDesc] = useState(initialDesc);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);
    const [disabled , setDisabled] = useState(true);


    useEffect(() => 
        validator())
    const submitHandler = (e) => {
        e.preventDefault();
        
        onSubmitProp({name, type, desc, skill1, skill2, skill3});
    }

    const validator = () => {
        if(name != null && name.length >= 3 && desc != null && desc.length >= 3 && type != null && type.length >= 3){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
        
    }

    return (
        <form action="" onSubmit={e => submitHandler(e)}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange = { (e)=> {setName(e.target.value)} }value={name}/>
                {name != null && name.length < 3  ? <p>Must be at least 3 characters</p> : ""}
            </p>
            <p>
                <label>Type</label><br/>
                <input type="text" onChange = { (e)=> {setType(e.target.value)}} value={type}/>
                {type != null && type.length < 3  ? <p>Must be at least 3 characters</p> : ""}
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = { (e)=> {setDesc(e.target.value)}} value={desc}/>
                {desc != null && desc.length < 3  ? <p>Must be at least 3 characters</p> : ""}
            </p>
            <p>
                <label>Skill 1</label><br/>
                <input type="text" onChange = { (e)=> setSkill1(e.target.value) } value={skill1}/>
            </p>
            <p>
                <label>Skill 2</label><br/>
                <input type="text" onChange = { (e)=> setSkill2(e.target.value) } value={skill2}/>
            </p>
            <p>
                <label>Skill 3</label><br/>
                <input type="text" onChange = { (e)=> setSkill3(e.target.value) } value={skill3}/>
            </p>
            <input type="submit" disabled={disabled ? "disabled" : "" } />
        </form>
    )
}