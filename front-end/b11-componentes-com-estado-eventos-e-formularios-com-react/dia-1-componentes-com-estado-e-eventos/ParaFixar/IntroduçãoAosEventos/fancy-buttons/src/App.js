import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.Clicou = this.Clicou.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  Clicou() {
    this.setState((estadoAterior, _props) =>({
      numeroDeCliques: estadoAterior.numeroDeCliques + 1
    }))
  };
  // Apertou = () => {
    
  // };
  // Precionou = () => {

  // };

  render() {
    return (
      <div className="App">
        <button className='Botão' onClick={ this.Clicou }>{this.state.numeroDeCliques}</button>
        {/* <button className='Botão' onClick={ this.Apertou }>Apertou</button>
        <button className='Botão' onClick={ this.Precionou }>Precionou</button> */}
      </div>
    );
  }
}


export default App;
