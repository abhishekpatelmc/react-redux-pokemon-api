import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList, GetPokemon } from "../actions/PokemonActions";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const PokemonList = useSelector((state) => state.PokemonList);
  const pokemonData = useSelector((state) => state.Pokemon);
  console.log(pokemonData);
  const tap = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
    dispatch(GetPokemon());
  };

  const showData = () => {
    if (PokemonList.Loading) {
      <p>Loading...</p>;
    }

    if (!_.isEmpty(PokemonList.data)) {
      return (
        <div className="list-wrapper">
          {PokemonList.data.map((el) => {
            return (
              <div className="pokemon-item">
                <p>{el.name}</p>
                <div className="bottom-color">
                  <Link to={`/pokemon/${el.name}`}>view</Link>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (PokemonList.errorMsg !== "") {
      return <p>{PokemonList.errorMsg}</p>;
    }

    return <p>Unable to get data</p>;
  };

  return (
    <div>
      <div className={"search-wrapper"}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          search
        </button>
      </div>
      {showData()}
      {!_.isEmpty(PokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(PokemonList.count / 18)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};

export default PokemonList;
