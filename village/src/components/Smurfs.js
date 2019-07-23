import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
import Smurf from './Smurf';
import styled, { css } from 'styled-components';
import SmurfInfo from './SmurfInfo';

const SGrid = styled.ul`

  display:grid;
  grid-template-columns: repeat(4,180px);
  padding: 20px;
  width: 800px;
  margin: 100px auto 400px;
  
`

class Smurfs extends Component {
  

  
  render() {
    console.log('render-smurf')
    return (
      <div className='container'>
        <h1>Smurf Village</h1>
        <SGrid>
          {this.props.smurfs.map(smurf => {
            return (
              
              <Smurf

                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                smurfs={this.props.smurfs}
              />
            );
          })}
          
        </SGrid>
        
      </div>
      
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
