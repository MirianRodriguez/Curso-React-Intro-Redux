//info para compartir entre todos o varios componentes, "fuente de toda verdad"

import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis'
import CounterSlice from './slices/counter/CounterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )
})