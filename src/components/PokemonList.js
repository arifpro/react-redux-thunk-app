import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../redux/actions/pokemonActions";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  const [a, setA] = useState(1);

  const fetchData = (page = 1) => {
    // dispatch(getPokemonList(page));
    setA(page);
  };

  useEffect(() => {
    // fetchData(1);
    dispatch(getPokemonList(a));
  }, [dispatch, a]);

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="list-wrapper">
          {pokemonList.data.map((el) => (
            <div className="pokemon-item" key={el.name}>
              <p>{el.name}</p>
              <Link to={`/pokemon/${el.name}`}>View</Link>
            </div>
          ))}
        </div>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      {/* <div className="search-wrapper">
        <p>Search: </p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          Search
        </button>
      </div> */}

      <div className="ui category search search-wrapper">
        <form onSubmit={() => props.history.push(`/pokemon/${search}`)}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search pokemon..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className="search icon"></i>
          </div>
        </form>
        <div className="results"></div>
      </div>

      {ShowData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName="pagination"
        />
      )}
    </div>
  );
};

export default PokemonList;
