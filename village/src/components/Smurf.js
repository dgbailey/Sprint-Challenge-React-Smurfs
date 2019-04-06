import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
import axios from 'axios';
import SmurfInfo from './SmurfInfo';

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
    console.log('constructor smurf')
    this.state = {props}
     
    
  }

  // componentDidMount(){
  //   this.setState(this.props.selected);
  //   console.log('smurf props',this.props)
  //   console.log('smurf mounted')
  // }
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
  

  // componentWillUpdate(newProps){
  //   console.log('new bigVanity',newProps)
  //   console.log('old bigVanity',this.state.data)
  //   console.log('update running');
  //   if(this.state.data !== newProps.portraitData){
  //      this.setState({
  //          data:newProps.portraitData

  //      })
  // }


  render(){
    console.log('render-smurf')
    console.log('smurf props',this.props)
    return (

      
        <SmurfFrame>
          <Link to={`/smurf/${this.props.id}`}>
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
          </Link>
          <Route path='/smurf/:id' render={(props) => <SmurfInfo smurfs={this.props} {...props}/>}></Route>
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

