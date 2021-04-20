const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const PokemonMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    default:
      return state;
  }
};
