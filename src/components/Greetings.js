import React from 'react';
import {message, Button} from 'antd';


const Greetings = (props) => {


  const success = () => {
    message.success(`Lang: ${props.lang} = ${props.texto}`);
  };

  return <Button onClick={success}>{props.lang}</Button>

};


export default Greetings;
