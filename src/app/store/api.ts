import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArrayUsers } from '../types/types';

interface IData {
  data: ArrayUsers;
  page: number;
}

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Users', 'Transactions'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test.gefara.xyz/api/v1' }),
  endpoints: (builder) => ({
    getUsers: builder.query<ArrayUsers, void>({
      query: () => `/user/list`,
      transformResponse: (response: IData): ArrayUsers => {
        return response.data;
      },
      providesTags: ['Users'],
    }),
    getTransactions: builder.query<ArrayUsers, number>({
      query: (id) => `/user/${id}/transactions`,
      providesTags: ['Transactions'],
    }),
    // create: builder.mutation({
    //   query: (body) => ({
    //     url: `/?rows=${32}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: ['Data'],
    // }),
  }),
});

export const { useGetUsersQuery, useGetTransactionsQuery } = api;
