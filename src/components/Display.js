import React from 'react';

const Display = (props) => {
  return (
    <div style={{textAlign: 'right', backgroundColor: 'black', fontFamily: 'digital', padding: '5px'}}>
      <div style={{color: 'orange', fontSize: '20px', minHeight: '20px'}}>{props.upperDisplayValue}</div>
      <div style={{color: 'white', fontSize: '29px', minHeight: '29px'}}>{props.lowerDisplayValue}</div>
    </div>
  )
}

export default Display
