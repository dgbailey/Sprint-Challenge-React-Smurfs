import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const SmurfFrame = styled.div`
-webkit-clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);  margin:10px;
 
  background:#00e4ff;
  width:200px;
  height: 167px;
  background:green;
  z-index:15;
  font-size:12px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  &:hover{
    cursor:pointer;
    opacity:.75;
  }

`

const SmurfInfo = (props) =>{
    console.log('render SmurfInfo');
    console.log(props)
    return(
        <SmurfFrame >
            
            <h3>{props.name}</h3>
            <strong>{props.height} tall</strong>
            <p>{props.age} smurf years old</p>
            
        
        </SmurfFrame>
    )
}

export default SmurfInfo;