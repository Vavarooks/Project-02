import React, { Component } from "react";
import axios from 'axios';
// Component exports
import ListItem from "../../components/TodoListItems";
class TodoForm extends Component {
  state = {
  input = "",
     users: [],
  };
  componentDidMount() {
    this.fetchUsers();
  }
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/sith/users'), {sith: this.state.input }).then(res => {
      this.setState({ users: res.data, input:"" });

     axios.post('/jedi/users', {jedi: this.state.input }).then(res => {
      this.setState({ users: res.data, input:"" });
    });
  };

 
  fetchJediUsers = () => {
    axios.get('/jedi/user').then(res => {
      console.log(res);
      this.setState({jedi: res.data});
    });
  }

  fetchSithUsers = () => {
    axios.get('/sith/user').then(res => {
      console.log(res);
      this.setState({sith: res.data});
    });
  }


  deleteJediById = (id) => {

    axios.delete(`/jedi/user/${id}`)
    .then(()=>{
      this.fetchJediUsers();
    })
    .catch(e)=>{
      console.log(e)
    }
  }

  deleteSithById = (id) => {

    axios.delete(`/sith/user/${id}`)
    .then(()=>{
      this.fetchSithUsers();
    })
    .catch(e)=>{
      console.log(e)
    }
  }



 

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Todos</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.input}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
        <ListItem items={this.state.todos} handleDelete={this.deleteTodoById} />
      </div>
    );
  }
}

export default TodoForm;