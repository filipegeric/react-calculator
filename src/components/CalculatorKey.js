import React from 'react';
import PropTypes from 'prop-types';

const CalculatorKey = (props) => {
  return (
    <div 
      className="button" 
      style={{ 
        width: props.width, 
        height: props.height, 
        color: 'white', 
        backgroundColor: props.backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: '1px solid black',
        fontSize: '18px'
      }}
      onClick={() => props.handleButtonClick(props.value)}
    >
      {props.value}
    </div>
  )
}

CalculatorKey.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  value: PropTypes.string.isRequired
};

CalculatorKey.defaultProps = {
  width: '80px',
  height: '65px',
  backgroundColor: '#4d4d4d'
};

export default CalculatorKey;


