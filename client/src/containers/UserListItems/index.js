import React from 'react';

import { Link } from 'react-router-dom';

const ListItems = props => {
    console.log(props.items);
    return (
        <ul className="list-group">
            { props.items.map(item => (
                <li 
                 className={item.user ? "list-group-item text-success" : "list-group-item text-danger"}
                 key={item.id}
                 >
                
                    {item.name}
                    <button 
                        className="btn btn-danger"
                        onClick={ () => props.handleDelete(item.id) }>Delete</button>
                    <Link to={`/sith/user${item.id}`}>Go to sith</Link>
                    <Link to={`/jedi/user${item.id}`}>Go to jedi</Link>

                </li>
            ))}
        </ul>
    );
}
export default ListItems;