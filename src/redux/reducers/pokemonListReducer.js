import * as ActionTypes from '../actionTypes';

const defaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0
};

const pokemonListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };
    case ActionTypes.POKEMON_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon"
      };
    case ActionTypes.POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
        count: action.payload.count
      };
    default:
      return state
  }
};

export default pokemonListReducer;