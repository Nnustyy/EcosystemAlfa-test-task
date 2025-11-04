import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl:'https://api.escuelajs.co/api/v1/products'

})

export const api = createApi({
  reducerPath:'api',
  baseQuery,
  endpoints: (build) => ({
    getProducts: build.query<any, void>({
      query: () => ({
        url:'',
        method:'GET'
      })
    })
  })
})

export const {useGetProductsQuery} = api