import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/PokemonActions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const PokemonList = useSelector((state) => state.PokemonList);
  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
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
                <Link to={`/pokemon/${el.name}`}>view</Link>
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
        <p>search:</p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          search
        </button>
      </div>
      {showData()}
      {!_.isEmpty(PokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(PokemonList.count / 15)}
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
