import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/PokemonActions";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(GetPokemon(PokemonName));
  }, []);

  const showData = () => {
    if (_.isEmpty(pekemonState.date[pokemonName])) {
    }
  };

  return (
    <div>
      <h1>{pokemonName}</h1>
    </div>
  );
};

export default Pokemon;
