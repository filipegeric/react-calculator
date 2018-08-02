import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import Display from './components/Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upperDisplayValue: '',
      lowerDisplayValue: '0'
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleNumberInput = this.handleNumberInput.bind(this);
    this.handleComaInput = this.handleComaInput.bind(this);
    this.handleSign = this.handleSign.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  isSign(value) {
    return value === '+' || value === '/' || value === 'x' || value === '-';
  }

  endsWithSign(value) {
    return value.endsWith('+') || value.endsWith('/') || value.endsWith('x') || value.endsWith('-');
  }

  handleNumberInput(value) {
    this.setState((prevState) => {
      if(prevState.lowerDisplayValue === '0' && (value === '0' || prevState.upperDisplayValue.endsWith('0'))) {
        return {
          upperDisplayValue: prevState.upperDisplayValue,
          lowerDisplayValue: prevState.lowerDisplayValue
        }
      } else if(prevState.upperDisplayValue === '' || prevState.upperDisplayValue.indexOf('=') !== -1) {
        return {
          upperDisplayValue: value,
          lowerDisplayValue: value
        }
      } else if(this.isSign(prevState.lowerDisplayValue)) {
        return {
          upperDisplayValue: prevState.upperDisplayValue + value,
          lowerDisplayValue: value
        }
      } else {
        return {
          upperDisplayValue: prevState.upperDisplayValue + value,
          lowerDisplayValue: prevState.lowerDisplayValue + value
        }
      }
    })
  }

  handleComaInput() {
    this.setState((prevState) => {
      if(prevState.lowerDisplayValue.indexOf('.') === -1) {
        return {
          upperDisplayValue: prevState.upperDisplayValue + '.',
          lowerDisplayValue: prevState.lowerDisplayValue + '.'
        }
      }
    });
  }

  handleSign(value) {
    this.setState((prevState) => {
      if(prevState.lowerDisplayValue === '0' && prevState.upperDisplayValue === '') {
        return {upperDisplayValue: value, lowerDisplayValue: value};
      } else if(this.endsWithSign(prevState.upperDisplayValue)) {
        return {
          upperDisplayValue: prevState.upperDisplayValue.substring(0, prevState.upperDisplayValue.length-1) + value,
          lowerDisplayValue: value
        }        
      } else if(prevState.upperDisplayValue.indexOf('=') !== -1) {
        return {
          upperDisplayValue: prevState.upperDisplayValue.split('=')[1] + value,
          lowerDisplayValue: value
        }
      } else {
        return {upperDisplayValue: prevState.upperDisplayValue + value, lowerDisplayValue: value};
      }
    });
  }

  evaluate() {
    if(this.state.upperDisplayValue.indexOf('=') !== -1 || this.endsWithSign(this.state.upperDisplayValue)) {
      return;
    }
    if(this.state.upperDisplayValue[0] === '/' || this.state.upperDisplayValue[0] === 'x') {
      this.setState({
        upperDisplayValue: this.state.upperDisplayValue.substring(1)
      }, () => {
        let result = eval(this.state.upperDisplayValue.replace(/x/g, '*'));
        this.setState((prevState) => ({
          upperDisplayValue: prevState.upperDisplayValue + "=" + result,
          lowerDisplayValue: result
        }));
      })
    } else {
      // well, isn't this ugly?
      let result = eval(this.state.upperDisplayValue.replace(/x/g, '*'));
      this.setState((prevState) => ({
        upperDisplayValue: prevState.upperDisplayValue + "=" + result,
        lowerDisplayValue: result
      }));
    }
    
  }

  handleButtonClick(value) {
    switch(value) {
      case 'AC': this.setState({upperDisplayValue: '', lowerDisplayValue: '0'}); break;
      case '.': this.handleComaInput(); break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9': this.handleNumberInput(value); break;
      case '-':
      case '/':
      case 'x': 
      case '+': this.handleSign(value); break;
      case '=': this.evaluate(); break;
      default: break;
    }
  }

  render() {
    return (
      <div style={{ width: '330px', border: '2px solid #47476b' }}>
        <Display upperDisplayValue={this.state.upperDisplayValue} lowerDisplayValue={this.state.lowerDisplayValue} />
        <Keyboard handleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default App;