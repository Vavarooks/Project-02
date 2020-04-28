import React, { Component } from "react";
import axios from 'axios';
 // import UserListItem from "../UserListItem"
import UserListItems from "../UserListItems";
 
class UserForm extends Component {
  state = {
    input: "",
    users: [
      {user: {
            id: "1",
            name: "fanuel",
            jedi: true,
            sith: false,
        },
        name: "fanuel",
        jedi: true,
        sith: false,
        error: "",}],
    score: 0,
  }
  componentDidMount() {

    // this.fetchJediUsers();
    this.fetchSithUsers();
  }
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.postJediData()
    this.postSithData()
    console.log(this.state.users)
  }
  postJediData = () => {

    axios.post('/jedi/users', { jedi: this.state.input })
      .then((res) => {
        this.setState({ users: res.data, input: "" })
      })
      .catch((e) => {
        console.log(e)
      })

  }
  postSithData = () => {

    axios.post('/sith/users', { sith: this.state.input })
      .then((res) => {
         this.setState({ users: res.data, input: "" })
       })
      .then((e) => {
        console.log(e)
      })

  }


  fetchJediUsers = () => {
    axios.get('/jedi/user')
      .then((res) => {
        // console.log(res);
        // console.log(res.data)
        this.setState({ jedi: res.data })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  fetchSithUsers = () => {
    axios.get('/sith/user')
    .then((res)=>{
      console.log(res);
      this.setState({sith: res.data})
    })
    .catch((e)=>{
      console.log(e)
    })
  }


  deleteJediById = (id) => {

    axios.delete(`./jedi/users/${id}`)
      .then(() => {
        this.fetchJediUsers()

      })
      .catch((e)=>{
        console.log(e)
      })
      
  }


  deleteSithById = (id) => {

    axios.delete(`/sith/user/${id}`)
      .then(() => {
        this.fetchSithUsers();
      })
      .catch((e)=>{
        console.log(e)
      })
      
  }

  deleteUsersById = () => {

    this.deleteSithById()
    this.deleteJediById()

  }



  

  render() {
 
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Users input</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.input}
              className="form-control"
            // id="exampleInputEmail1"
            />
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
        <UserListItems items={this.state.users} handleDelete={this.deleteUsersById}
         />
      </div>
    );
  }
}

export default UserForm;