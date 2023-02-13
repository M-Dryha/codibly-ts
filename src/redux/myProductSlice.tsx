import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserState } from '../types/data';

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/',
  }),
  tagTypes: ['products'],
  endpoints(build) {
    return {
      getProductsByPagination: build.query<UserState, number>({
        query: (pages: number = 1) => ({
          url: `products?per_page=5&page=${pages}`,
          params: {
            page: pages,
          },
        }),
        providesTags: ['products'],
      }),
      getProducts: build.query<UserState, void>({
        query: () => ({
          url: 'products?per_page=12',
          method: 'get',
        }),
        providesTags: ['products'],
      }),
    };
  },
});

export const { useGetProductsQuery, useGetProductsByPaginationQuery } =
  productApi;
