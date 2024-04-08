import React from 'react';
import "./input.css"

function Display({ value }) {
  return <input className='input' type="text" value={value} readOnly />;
}

export default Display;
