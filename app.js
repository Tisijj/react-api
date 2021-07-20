import React, { Component } from 'react';
import api from './api';

class App extends Component{

  state={
    filmes: [],
  }

  async componentDidMount(){
    const responde = await api.get('star%20wars');



    this.setState({ filmes: responde.data});
  }

  render(){

   const { filmes } = this.state;

    return(
      <div>
        <h1>Listar os Filmes</h1>

        {filmes.map(filmes => (
          <li key={filme.show.id}>
            <h2><strong>Título:</strong>
            {filme.show.name}
            </h2>
            <p>
             {filme.show.url}
            </p> 
          </li>
        ))}
      </div>
    );
  };
};

export default App;
