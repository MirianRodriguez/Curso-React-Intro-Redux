import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

/** thunks son acciones asíncronas que hacen dispatch de otras acciones */
export const getPokemons = (page = 0) => {
  return async(dispatch, getState) => {
    dispatch(startLoadingPokemons());
    
    
    const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page*10}`);
    console.log(data);
    dispatch(setPokemons({page:page+1, pokemons: data.results}));
  }
}
