import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton'

export default props => {
    const { removeFromDom } = props;
    const deletePet = (id) => {
        axios.delete('http://localhost:8000/api/pets/'+id+"/delete")
        .then(res => removeFromDom(id))
    }




    return (
        <div>
            <h2>All Pets</h2>
        <table className="table">
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            {props.pets.map((item, i) => {
            return (
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td><Link to={"/pets/"+ item._id}>Details</Link> |  <Link to={"/pets/"+ item._id+"/edit"}>Edit</Link></td> 
            </tr>
            )
        })}
        </table>
        </div>
    )
}