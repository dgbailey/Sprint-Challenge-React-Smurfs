import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Smurf from './components/Smurf'

const Snav = styled.nav`
  display:flex;
  height:100px;
  margin:20px;
  justify-content:space-between;

  a{
    text-decoration:none;
    padding:20px;


  }

  

  a:visited{
    text-decoration:none;
  }
  a.active .fill{
    color: blue;
    background:yellow;
  }

`




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    console.log('smurfs data app did mount')
    axios.get('http://localhost:3333/smurfs')
    .then(res => {console.log(res.data);
                    this.setState({smurfs:res.data})})
    .catch(err => {console.log(err)})
  }


  addMySmurf = newSmurf => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        this.setState({ smurfs: res.data});
        console.log(res);
        // redirect
        // this.props.history.push('/item-list');
      })    
      .catch(err => {
        console.log(err);
      });
  }

  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <Snav>
            <NavLink to='/'><span className='fill'>Smurfs</span></NavLink>
            <NavLink to='/smurf-form'><span className='fill'>Add Smurf</span></NavLink>
          </Snav>
        </div>
        <Route exact path='/' render = {(props) =><Smurfs {...props} smurfs={this.state.smurfs}/>}></Route>
        <Route exact path='/smurf-form' render = {(props) =><SmurfForm {...props} addMySmurf={this.addMySmurf}/>}></Route>
        <Route exact path='/smurf/:id' render = {(props) =><Smurf {...props}/>}></Route>
        
        
      </div>
    );
  }
}

export default App;
