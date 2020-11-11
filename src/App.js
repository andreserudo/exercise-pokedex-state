import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import ButtonsFilter from './ButtonsFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonID: 0,
      totalOfPokemons: pokemons.length,
      allPokemons: [pokemons[0]],      
    }    
    //console.log(this.state);
  }

  nextPokemon = () => {
    this.setState((state, _props) => {
      if ( (this.state.pokemonID + 1 === this.state.totalOfPokemons)) {
        return {
          pokemonID: 0,
          totalOfPokemons: pokemons.length,
          allPokemons: [pokemons[0]]
        }
      } else {
        return {
          pokemonID: state.pokemonID + 1,
          totalOfPokemons: pokemons.length,
          allPokemons: [pokemons[state.pokemonID + 1]]
        }
      }
    })    
  }

  showAllPokemons = () => {
    this.setState(  (state, _props) => {
      return {
        pokemonID: 0,
        totalOfPokemons: pokemons.length,
        allPokemons: pokemons      
      }
    });
  }
  render() {
    const types = pokemons.map( pokemon => pokemon.type);

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.allPokemons} types={types}/>        
        <button onClick={this.nextPokemon}>Next</button>
        <button onClick={this.showAllPokemons}>All</button>
        <br></br>
        <ButtonsFilter types={types}/>
      </div>
    );
  }
}

export default App;