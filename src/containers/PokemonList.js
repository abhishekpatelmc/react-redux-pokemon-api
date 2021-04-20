import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/PokemonActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const dispatch = useDispatch();
  const PokemonList = useSelector((state) => state.PokemonList);
  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const showData = () => {
    if (!_.isEmpty(PokemonList.data)) {
      return (
        <div className="list-wrapper">
          {PokemonList.data.map((el) => {
            return (
              <div className="pokemon-item">
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>view</Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (PokemonList.Loading) {
      <p>Loading...</p>;
    }

    if (PokemonList.errorMsg !== "") {
      return <p>{PokemonList.errorMsg}</p>;
    }

    return <p>Unable to get data</p>;
  };

  return <div>{showData()}</div>;
};

export default PokemonList;
