import React from 'react';
import { Link } from 'react-router-dom';
// import UserListItems from './../UserListItems'

const UserListItems = (props) => 

{ 
    return (
    <div>

      {props.items.map((item) => (
                <span>
                    <ul className="list-group" >

                        <li> {item.id}</li>
                        <li> {item.name} </li>
                        <li> {item.jedi}</li>
                        <li> {item.sith} </li>

                    </ul>

                    <button className="btn btn-danger" onClick={() => props.handleDelete(item.id)}>Delete</button>
 
 <Link to={`/sith/user${item.id}`}>Go to sith</Link>


 <Link to={`/jedi/user${item.id}`}>Go to jedi</Link> 

                </span>
       ) ) }
 
 
          
            
            </div>
            
            )}


export default UserListItems;