import React from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect, useHistory} from "react-router-dom";

// components
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";
import TodoInput from "./components/ToDo/TodoInput";
import TodoList from "./components/ToDo/TodoList";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <nav className="app__navbar">
        <NavLink to="/home">Search</NavLink>
        <NavLink to="/">To-Do</NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <TodoInput />
          <TodoList />
        </Route>
        <Route exact path="/home" component={PokemonList} />
        <Route exact path="/pokemon/:pokemon" component={Pokemon} />
        {/* <Redirect to="/" /> */}
        <Route path="*">
          <h1 style={{ textAlign: 'center' }}>Page Not Found</h1>
          {setTimeout(function(){ history.push('/') }, 3000)}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
