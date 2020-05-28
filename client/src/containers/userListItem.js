import React, { Component } from 'react';
import axios from "axios"
class UserListItem extends Component {
    state={
        user: {},
        name:'',
    }



    handleChange = event => {
        this.setState({name:event.target.value})
    }
    // async 
    componentDidMount(){
        axios.get(`/users/${this.props.match.params.userId}`).then((response)=>{
            this.setState({user: response.data})
        })
        .catch((e)=>{
            console.log(e)
        })
     
    }

    handleSubmit = async event => {
        event.preventDefault()
        try{
            await axios.patch(`/users/${this.props.match.params.userId}`,{name:this.state.name})
            const {data: user} = await axios.get(`/users/${this.props.match.params.userId}`)
            this.setState({user,name:''})
         }
        catch(e){

        }
    }

    render() {
        console.log("this",this.state)
        // const {user} = this.state
        return (
            <div>
                {/* <h1><strong> name:</strong> {this.state.user.name} </h1>     

                <h1><strong>status: </strong> {this.state.user.jedi}</h1>
                
                <input onChange={this.handleChange}
                       value={this.state.name}/>  <button onClick={this.handleSubmit}> submit change </button>  */}

 <div className="card">
   <div className="card-body playerCard">
       <h1> Player Card</h1>
     <h5 className="card-title"> <strong> name:</strong> {this.state.user.name}</h5>
     <h6 className="card-subtitle mb-2 text-muted"><strong> Sith / Jedi: </strong> {this.state.user.sith? "Sith": "Jedi"}</h6>
     {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      
     {/* <div> 
     <input onChange={this.handleChange}
                        value={this.state.name}/>  <button onClick={this.handleSubmit}> submit change </button>
                        </div> */}
   </div>
 </div>
            </div>
        );
    }
}


export default UserListItem
