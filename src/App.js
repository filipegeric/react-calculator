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
  }

  handleButtonClick(value) {
    console.log(value);
    if(value == 'AC') {
      this.setState({
        upperDisplayValue: '',
        lowerDisplayValue: '0'
      })
    } else {
      this.setState((prevState) => {
        if(prevState.lowerDisplayValue == 0) {
          return {
            upperDisplayValue: value,
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