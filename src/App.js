import React, { useState } from 'react';
import './App.css';
import CalculatorComponent from './components/CalculatorComponent';
import LogComponent from './components/LogComponent';
import socketIOClient from 'socket.io-client';
import { evaluate } from 'mathjs';

const App = () => {
  const [result, setResult] = useState('');
  const [log, setLog] = useState('');
  const socket = socketIOClient('https://web-calculator-server.herokuapp.com/');

  
  socket.on('fromServer', response => {
    setLog(response);
  });
  socket.emit('connection', `I am client`);

	const onClick = (value) => {
		switch(value) {
			case '=':
				calculate();
				break;
			case 'AC':
				reset();
				break;
			case 'CE':
				backspace();
				break;
			default:
				setResult(`${ result }${ value }`);
		}
	};

	const calculate = () => {
		try {
      let res = `${ evaluate(result) }`;
      res = res === 'undefined' ? '' : res;
      if(res !== '' && isFinite(res))
        socket.emit('fromClient', `${ result }=${ res }`);
			setResult(res);
		} catch (e) {
			setResult('Invalid Expression')
		}
	};

	const reset = () => {
		setResult('');
	};

	const backspace = () => {
    setResult(result.slice(0, -1));
	};

	return (
		<div className='app'>
			<CalculatorComponent value={ result } onClick={ onClick } />
      <LogComponent value={ log }/>
		</div>
  );
}

export default App;
