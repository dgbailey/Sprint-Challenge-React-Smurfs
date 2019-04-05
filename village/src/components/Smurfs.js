import React, { Component } from 'react';

import Smurf from './Smurf';
import styled, { css } from 'styled-components';

const SGrid = styled.ul`

  display:grid;
  grid-template-columns: repeat(4,180px);
  padding: 20px;
  width: 800px;
  margin: 100px auto 400px;
  
`

class Smurfs extends Component {
  render() {
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
