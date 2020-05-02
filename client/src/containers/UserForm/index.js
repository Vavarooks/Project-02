import React from 'react';
import "./../../components/App/index.css"
// import "./../../src/"
import axios from 'axios';
import "./../../components/App/index.css"
// import "./../../src/"
// import UserListItem from "../UserListItem"

class UserForm extends React.Component {
    state = {
        id: 0,
        name: "",
        jedi: {},
        sith: {},
        status: "good",

    }

    componentDidMount() {

        this.fetchJediUsers();

        this.fetchSithUsers();
    }
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ name: value });
    };




    handleSubmit = (e) => {
        e.preventDefault();
        // evaluate the response doing the average and if is > 70 === good else ===bad
        let numRandom = Math.random() * 100
        let status = numRandom > 50 ? "good" : "bad";
        console.log(status, numRandom)
        if (status === "good") {
            this.postJediData()
        }
        else {
            this.postSithData()
        }
        this.props.onSubmit({
            id: this.state.id++,
            name: this.state.name,
            sith: "false",
            jedi: "false",
        })

        this.setState({
            name: ""
        });

    }



    postJediData = () => {

        axios.post('/jedi/users', { jedi: this.state.name })
            .then((res) => {
                this.setState({ users: res.data, name: "" })
            })
            .catch((e) => {
                console.log(e)
            })

    }
    postSithData = () => {

        axios.post('/sith/users', { sith: this.state.name })
            .then((res) => {
                this.setState({ users: res.data, name: "" })
            })
            .catch((e) => {
                console.log(e)
            })

    }


    fetchJediUsers = () => {
        console.log("fetchJedi")
        axios.get('/jedi/users')
            .then((res) => {
                // console.log(res);
                console.log(res.data)
                this.setState({ jedi: res.data })
            })
            .catch((e) => {
                console.log(e)
            })
    }

    fetchSithUsers = () => {
        console.log("fetchSith")
        axios.get('/sith/users')
            .then((res) => {
                console.log(res.data);
                this.setState({ sith: res.data })
            })
            .catch((e) => {
                console.log(e)
            })
    }


    deleteJediById = (id) => {

        axios.delete(`/jedi/users/${id}`)
            .then(() => {
                this.fetchJediUsers()

            })
            .catch((e) => {
                console.log(e)
            })

    }


    deleteSithById = (id) => {

        axios.delete(`/sith/users/${id}`)
            .then(() => {
                this.fetchSithUsers();
            })
            .catch((e) => {
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

                {/* <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div> */}


<form>
    <div className="form-group">
<br />
<input className="input-form-lg " name="name"
     placeholder ="Enter a Jedi/Sith Name"
    value={this.state.name} onChange={this.handleChange} />
    <button className="add-player" onClick={this.handleSubmit}> <strong> + Add Player</strong>   </button>
</div>
</form>
                {/* <UserListItems items={this.state.users} handleDelete={this.deleteUsersById}
         /> */}
            </div>
        );
    }
}

export default UserForm;


