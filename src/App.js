import React, { Component } from 'react';
import "./App.css"
import Calculadora from './components/calculadora'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      display: "",
      operators: [' + ', ' - ', ' * ', ' / ', '9', '8', '7', '6', '5', '4', '3','2', '1', '0' ]
    }
  }

  render() {
    return (
      <div className="App">
        <Calculadora display={this.state.display} 
          onClick={this.onClick.bind(this)}
          onChange={this.onChange.bind(this)} 
          operators={this.state.operators}
          clear={this.clear.bind(this)} 
          calculate={this.calculate.bind(this)}/>
      </div>
    );
  }

  onChange(e){
    this.setState({...this.state, display: e.target.value} )
  }
  clear(){
    this.setState({...this.state, display: ''})
  }

  calculate(){
    const {state} = this 
    const expressao = state.display.split(' ')
    const primeiroDigito = Number.parseInt(expressao[0])
    const segundoDigito = Number.parseInt(expressao[2])
    const operador = expressao[1]
    let resultado;

    switch(operador){
      case '-':
        resultado = primeiroDigito - segundoDigito
        break
      case '+':
         resultado = primeiroDigito + segundoDigito 
        break
      case '*':
        resultado = primeiroDigito * segundoDigito
        break
      case '/':
         resultado = primeiroDigito / segundoDigito
         break
      default:
        resultado = 'ERROR!'
    }
    state.display = `${resultado}`
    this.setState(state)
  }
  onClick(e){
    const value = e.target.getAttribute('data-value')
    const {state} = this
    state.display += value 
    this.setState(state) 
  }
}

export default App;
