import React, { useState } from 'react';
import Display from '../display';
import Button from '../button';
import "./calculator.css"

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');


 
  const handleClick = (value) => {
    if (result) {
      setInput('');
      setResult('');
    } else if (
      !'+-*/'.includes(value) || 
      !'+-*/'.includes(input.slice(-1)) 
    ) {
      setInput(input + value);
    }
  };

  const deleteCharacter = () => {
    setInput(prevInput => prevInput.slice(0, -1)); 
  };

  const clearInput = () => {
    setResult('');
    setInput('')
  };

  const calculateResult = () => {
      setResult(eval(input));

    
  };

  return (
    <div className="container">
        <div className="calculator">
        <Display value={result ? result : input} />
        <div className="buttons">
            <Button onClick={() => handleClick('1')} value="1" />
            <Button onClick={() => handleClick('2')} value="2" />
            <Button onClick={() => handleClick('3')} value="3" />
            <Button onClick={deleteCharacter} value="CE"/>
            <Button onClick={() => handleClick('4')} value="4" />
            <Button onClick={() => handleClick('5')} value="5" />
            <Button onClick={() => handleClick('6')} value="6" />
            <Button onClick={() => handleClick('+')} value="+" />
            <Button onClick={() => handleClick('7')} value="7" />
            <Button onClick={() => handleClick('8')} value="8" />
            <Button onClick={() => handleClick('9')} value="9" />
            <Button onClick={() => handleClick('-')} value="-" />
            <Button onClick={() => handleClick('/')} value="/" />
            <Button onClick={() => handleClick('0')} value="0" />
            <Button onClick={() => handleClick('**')} value="^" />
            <Button onClick={() => handleClick('*')} value="*" />
            <Button onClick={calculateResult} value="=" />
            <Button className="clean" onClick={clearInput} value="C" />
        </div>
            
        </div>
    </div>
  );
}

export default Calculator;
