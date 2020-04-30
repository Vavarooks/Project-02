import React, { Component } from "react";
import axios from 'axios';
// Component exports
import ListItem from "../../containers/UserListItems";



class UserForm extends Component {
  state = {
    input: "",
    users: []
  }
  componentDidMount() {

    this.fetchJediUsers();
    this.fetchSithUsers();
  }
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postJediData()
    // this.postSithData()
    console.log(this.state.users)
  }

  postSithData = () => {

    axios.post('/sith/users', { sith: this.state.input }).then(res => {
      this.setState({ users: res.data, input: "" });
    });
  }

  postJediData = () => {

    axios.post('/jedi/users', { jedi: this.state.input }).then(res => {
      this.setState({ users: res.data, input: "" });
    });
  }

  fetchJediUsers = () => {
    axios.get('/jedi/user').then(res => {
      console.log(res);
      this.setState({ jedi: res.data });
    });
  }

  fetchSithUsers = () => {
    axios.get('/sith/user').then(res => {
      console.log(res);
      this.setState({ sith: res.data });
    });
  }
deleteJediById = (id) => {

axios.delete(`./jedi/users/${id}`)
.then(()=>{
this.fetchJediUsers()

})
.catch(e=>{
  console.log(e)
})
}


  deleteSithById = (id) => {

    axios.delete(`/sith/user/${id}`)
      .then(() => {
        this.fetchSithUsers();
      })
      .catch(e=>{
        console.log(e)
      })
  }

  deleteUsersById = () => {

    this.deleteSithById()
    this.deleteJediById()

  }

  render() {
    return (
      <div className="BTN">
        <form>
          <div className="form-group">
            <label>Enter Your Jedi or Sith Name</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.input}
              className="form-control"
            // id="exampleInputEmail1"
            />
          </div >
          <div class="text-center">
          <button onClick={this.handleSubmit} className="btn btn-primary ">
            Submit
          </button>
          </div>
          <br></br>
        </form>
        <ListItem items={this.state.users} handleDelete={this.deleteUsersById} />
      </div>
      
    );
  }
}

  export default UserForm;