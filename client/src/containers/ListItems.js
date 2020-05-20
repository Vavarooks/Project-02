import React from "react" 
import { Link } from "react-router-dom"
import "./../components/react-sound/index.css"
 

const ListItems = props => (
  
  
  <ul className="list-group"> 
 {props.items.map((item)=>(
<li className="list-group-item"key={item.id}>
<Link className="go-to-user"to={`/users/${item.id}`}>
  <button className="btn btn-success mybtn">
  <strong> name : </strong> {item.name} <br/> <strong> Sith / Jedi: </strong> {item.sith? "Sith": "Jedi"}
     </button>
     </Link>

 {/* <Link className="go-to-user"to={`/users/${item.id}`}> go to user </Link> */}

<button className="btn btn-danger deletebtn" onClick={()=> props.handleDelete(item.id)}>Delete</button>

</li>

 ))}
   
   </ul>
   
);

export default ListItems;
 