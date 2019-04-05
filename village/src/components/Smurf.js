import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
import axios from 'axios';

const SmurfFrame = styled.div`
-webkit-clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);  margin:10px;
 
  background:#00e4ff;
  width:200px;
  height: 167px;
  margin-right:-10px;
  font-size:12px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  &:hover{
    cursor:pointer;
    opacity:.75;
  }
  &:nth-child(2n){
    margin: 100px 82px -106px -17px;
  }
  



`

class Smurf extends Component{
  constructor(props){
    super(props);
    this.state ={
      age:this.props.age,
      height:this.props.height,
      name:this.props.name
    }
  }

  // getMySmurf (){
  //   this.setState({age:this.props.age,
  //     height:this.props.height,
  //     name:this.props.name}
  //   )
  // }
    // console.log('smurfprops',this.props.id);
    // axios
    //   .get(`http://localhost:3333/smurfs/${this.props}`)
    //   .then(res => {
    //     this.setState({ age: res.data.age,
    //     height:res.data.height,
    //     name:res.data.name});
    //     console.log(res);
    //     // redirect
    //     // this.props.history.push('/item-list');
    //   })    
    //   .catch(err => {
    //     console.log(err);
    //   });
  

  componentWillUpdate(newProps){
    console.log('new bigVanity',newProps)
    console.log('old bigVanity',this.state.data)
    console.log('update running');
    if(this.state.data !== newProps.portraitData){
       this.setState({
           data:newProps.portraitData

       })
  }

}
  render(){
    return (

      
      <SmurfFrame >
        <Link to={`/smurf/${this.state.id}`}>
        <h3>{this.state.name}</h3>
        <strong>{this.state.height} tall</strong>
        <p>{this.state.age} smurf years old</p>
        </Link>
      </SmurfFrame>
      
    );
    }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

