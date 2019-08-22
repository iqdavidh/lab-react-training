import React from 'react';

function getValor(props) {

  let min = props.min;
  let max = props.max;

  return  Math.floor( Math.random() * (max - min) + min);
}

const Random = (props) => {
  return <p className="bloqueRandom">Random value entre {props.min} y {props.max} => {getValor(props)}</p>
};

export default Random;
