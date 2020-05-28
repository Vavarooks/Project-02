import React from 'react';

// import Sound from 'react-sound';
import UserForm from "./../containers/UserForm"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import UserListItem from "./../containers/userListItem"
import NavBar from "./../components/navBar/index"

// import soundfile from "../audio_file.mp3"

import './../components/react-sound/index.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import UserList from "../../containers/UserListItem"

// import UserListItem from './../../containers/UserListItem'
// import UserForm from "./../../containers/UserForm"
// import UserListItems from "./../../containers/UserListItems"
// import UserListItem from "../../containers/UpdateListItem"

// import ListItems from '../../containers/UserListItems';

const App = props => (
  <Router> 
    

  <NavBar/>

<Route exact path="/" component={UserForm}/>
<Route exact path="/users/:userId" component={UserListItem}/>

 
       
    </Router>


  );


export default App;

 



