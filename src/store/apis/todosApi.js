import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({

        //declarando esto se genera el custom hook para ser exportado
        getTodos: builder.query({
            query: () => '/todos'
        }),

        //declarando esto se genera el custom hook para ser exportado
        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        }),

    })

})

//el createApi, crea customHooks que puedo exportar
export const { useGetTodosQuery, useGetTodoQuery, } = todosApi;