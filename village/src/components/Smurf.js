import React from 'react';
import styled, { css } from 'styled-components';

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

const Smurf = props => {
  return (
    <SmurfFrame>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfFrame>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

