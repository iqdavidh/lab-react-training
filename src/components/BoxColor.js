import React from 'react';
import {Progress} from 'antd';


function rgbToHex(d) {
  var hex = Number(d).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return  hex;
}

function to3Digits(d) {
  let code = d.toString();
  return code.padStart(3,'0');

}

const BoxColor = ({r, g, b}) => {


  let rgb = `${to3Digits(r)}${to3Digits(g)}${to3Digits(b)}`;
  let hex= `${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;

  return <Progress type="circle" percent={100}
                   strokeColor={hex}
                   format={() => { return  rgb}}/>


};


export default BoxColor;
