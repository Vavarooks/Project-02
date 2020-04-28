 
import React, { Component } from 'react';
import axios from 'axios';


class UserListItem extends Component {
    state = {
        user: {
            id: "",
            name: "",
            jedi: "",
            sith: ""
        },
        name: "",
        jedi: "",
        sith: "",
        error: "",
    };

handleChange = event => {
    this.setState({ name: event.target.value })
}

componentDidMount = () => {
    axios.get(`/sith/users/${this.props.match.params.sithId}`)
        .then((data) => {
            this.setState({ user: data, e: '' });

        })
        .catch((e) => {
            console.log(e)
        });

    axios.get(`/jedi/users/${this.props.match.params.jediId}`)
        .then((data) => {
            this.setState({ user: data, e: '' });

        })
        .catch((e) => {
            console.log(e)
        });

}



handleSubmit = (event) => {

    
    event.preventDefault();

    axios.patch(`/sith/users/${this.props.match.params.sithId}`, { name: this.state.name })
        .then((data) => {
            this.setState({ sith: data, e: '', name: '' });

        })
        .catch((e) => {
            console.log(e)
        });

    axios.patch(`/jedi/users/${this.props.match.params.jediId}`, { name: this.state.name })
        .then((data) => {
        this.setState({ jedi: data, e: '', name: '' });

    })
        .catch((e) => {
            console.log(e)
        });


    axios.get(`/sith/users/${this.props.match.params.sithId}`)
        .then((data) => {
            this.setState({ sith: data, e: '', name: '' });
        })
            
        .catch((e) => {
            console.log(e)
        });

    axios.get(`/jedi/users/${this.props.match.params.jediId}`)
        .then((data) => {
            this.setState({ jedi: data, e: '', name: '' });
        })
    
        .catch((e) => {
            console.log(e)
        });

    }

 render() {
        console.log(this.state);
        const { user } = this.state;
        return (
            <div>
                {this.state.error ? <h1>{this.state.error}</h1> : ""}
                <h1>Name: {user.name}</h1>
                <h1>Id: {user.id}</h1>
                <h1> Sith: {user.sith}</h1>
                <h1> Jedi: {user.jedi}</h1>

                <input
                    onChange={this.handleChange}
                    value={this.state.name} />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }}
    
        


export default UserListItem;

