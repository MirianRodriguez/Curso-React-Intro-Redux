import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    const {page, pokemons = [], isLoading} = useSelector((state) => state.pokemons); //hace referecia al nombre dado en el store
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemons());
    }, [])
    
  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading: {isLoading?'True':'False'}</span>
        <ul>
            {pokemons.map(poke => (
                <li key={poke.name}>{poke.name}</li>   
            ))}
        </ul>

        <button disabled={isLoading}
        onClick={()=>dispatch(getPokemons(page))}>Next</button>
    </>
  )
}
