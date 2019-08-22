import React from 'react';

import   './CreditCard.css';

const CreditCard = ( props) => {

  let digitos='**** **** **** ' + props.number.substring(12);

  let panStyle={};

  return <div className="tarjetaCredito" style={ {background:props.bgColor , color: props.color}}>

    <h1>{digitos}</h1>
    <div>Expires {props.expirationMonth} / {props.expirationYear} <span className="panBanco">{props.bank}</span> </div>

    <div>{props.owner}</div>
  </div>
};


export  default  CreditCard;
