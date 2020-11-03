const CalculatorComponent = (props) => {
  return (
    <div className='calculator'>
      <div className='result'>
        <p>{ props.value }</p>
      </div>
      <div className='keypad'>
        <button value='(' className='op' onClick={ e => props.onClick(e.target.value) }>(</button>
        <button value='CE' className='op' onClick={ e => props.onClick(e.target.value) }>CE</button>
        <button value=')' className='op' onClick={ e => props.onClick(e.target.value) }>)</button>
        <button value='AC' className='op' onClick={ e => props.onClick(e.target.value) }>AC</button>


        <button value='7' onClick={ e => props.onClick(e.target.value) }>7</button>
        <button value='8' onClick={ e => props.onClick(e.target.value) }>8</button>
        <button value='9' onClick={ e => props.onClick(e.target.value) }>9</button>
        <button value='/' className='op' onClick={ e => props.onClick(e.target.value) }>÷</button>


        <button value='4' onClick={ e => props.onClick(e.target.value) }>4</button>
        <button value='5' onClick={ e => props.onClick(e.target.value) }>5</button>
        <button value='6' onClick={ e => props.onClick(e.target.value) }>6</button>
        <button value='*' className='op' onClick={ e => props.onClick(e.target.value) }>x</button>

        <button value='1' onClick={ e => props.onClick(e.target.value) }>1</button>
        <button value='2' onClick={ e => props.onClick(e.target.value) }>2</button>
        <button value='3' onClick={ e => props.onClick(e.target.value) }>3</button>
        <button value='-' className='op' onClick={ e => props.onClick(e.target.value) }>-</button>


        <button value='.' onClick={ e => props.onClick(e.target.value) }>.</button>
        <button value='0' onClick={ e => props.onClick(e.target.value) }>0</button>
        <button className='enter' value='=' onClick={ e => props.onClick(e.target.value) }>=</button>
        <button value='+' className='op' onClick={ e => props.onClick(e.target.value) }>+</button>
      </div>
    </div>
  );
}

export default CalculatorComponent;
