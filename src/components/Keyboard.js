import React from 'react'
import CalculatorKey from './CalculatorKey'

const Keyboard = (props) => {
  return (
    <div style={{ fontFamily: 'Share Tech Mono', backgroundColor: 'black', padding: '5px'}}>
      <div style={{ display: 'flex' }}>
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="AC" backgroundColor="#ac3939" width="160px"/>
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="/" backgroundColor="#666666" />
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="x" backgroundColor="#666666" />
      </div>
      <div style={{ display: 'flex' }}>
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="7" />
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="8" />
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="9" />
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="-" backgroundColor="#666666" />
      </div>
      <div style={{ display: 'flex' }}>
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="4" />
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="5" />
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="6" />
        <CalculatorKey handleButtonClick={props.handleButtonClick} value="+" backgroundColor="#666666" />
      </div>
      <div style={{display: 'flex'}}>
        <div>
          <div style={{display: 'flex'}}>
            <CalculatorKey handleButtonClick={props.handleButtonClick} value="1" />
            <CalculatorKey handleButtonClick={props.handleButtonClick} value="2" />
            <CalculatorKey handleButtonClick={props.handleButtonClick} value="3" />
          </div>
          <div style={{display: 'flex'}}>
            <CalculatorKey handleButtonClick={props.handleButtonClick} value="0" width="160px" />
            <CalculatorKey handleButtonClick={props.handleButtonClick} value="." />
          </div>
        </div>
        <div>
          <CalculatorKey handleButtonClick={props.handleButtonClick} value="=" height="130px" backgroundColor="#004466" />
        </div>
      </div>
    </div>
  )
}

export default Keyboard
