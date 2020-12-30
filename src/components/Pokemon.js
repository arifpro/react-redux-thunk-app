import React, { useEffect } from "react";
import _ from "lodash";
import { connect, useDispatch } from "react-redux";
import { getPokemon } from "../redux/actions/pokemonActions";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  // const props.pokemonState = useSelector(state => state.Pokemon);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, [dispatch, pokemonName]);

  const ShowData = () => {
    if (!_.isEmpty(props.pokemonState.data[pokemonName])) {
      const pokeData = props.pokemonState.data[pokemonName];
      return (
        <div className="pokemon-wrapper">
          <div className="item">
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokeData.stats.map((el) => {
              return (
                <p key={el.stat.name}>
                  {el.stat.name} {el.base_stat}
                </p>
              );
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map((el) => (
              <p key={el.ability.name}>{el.ability.name}</p>
            ))}
          </div>
        </div>
      );
    }

    if (props.pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (props.pokemonState.errorMsg !== "") {
      return <p>{props.pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return (
    <div className="poke">
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemonState: state.pokemon,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
