import {combineReducers} from "redux";
import pokemonListReducer from "./pokemonListReducer";
import pokemonMultipleReducer from "./pokemonMultipleReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemon: pokemonMultipleReducer,
  todos: todoReducer,
});

export default rootReducer;