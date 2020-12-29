const defaultState = {
  loading: false,
  data: {},
  errorMsg: ""
};

const pokemonMultipleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };
    case "POKEMON_MULTIPLE_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find pokemon"
      };
    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload
        }
      };
    default:
      return state
  }
};

export default pokemonMultipleReducer;