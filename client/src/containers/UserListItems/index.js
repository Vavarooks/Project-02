
import React from 'react';
// import { Link } from 'react-router-dom';
import UserForm from "./../UserForm"
import "./../../components/App/index.css"
import "./../../components/App/index.css"
// import UserListItems from './../UserListItems'
import axios from "axios"


class UserList extends React.Component {

    state = {
        users: [],
        jedi:[],
        sith:[]
    };
    componentDidMount() {

        this.fetchUsers();
    
      }

    fetchUsers = () => {
        console.log("fetchJedi")
      axios.get('/jedi/users')
        .then((res) => {
          // console.log(res);
          console.log(res.data)
          let Jedi = res.data
     
            console.log("fetchJedi")
          axios.get('/sith/users')
            .then((res) => {
              // console.log(res);
              console.log(res.data)
              let Sith = res.data
              let users = [...Jedi,...Sith]
              this.setState({ users: users})
            })
           
        })
    }
    
  
   
    addUser = (user) => {

        this.setState({
            users: [user,...this.state.users]
        })
     }

    render(){

        return  <div> 

            <div className = "divbox"> 

            <UserForm  onSubmit={this.addUser}/>

           {this.state.users.map((user)=>(
        <div className ="card">
        
        <li > <strong> id : </strong> {user.id}</li>
        <li > <strong>  Name : </strong> {user.name}  </li>
        <li > <strong> Sith / Jedi: </strong> {user.sith? "Sith": "Jedi"}</li>


         </div>


           ))}

         {/* {JSON.stringify(this.state.users)} */}

            </div>

       </div>


        }

        } 

        export default UserList



 