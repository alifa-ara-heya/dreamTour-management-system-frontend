import { axiosBaseQuery } from './axiosBaseQuery';
import { createApi, } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    // baseQuery: fetchBaseQuery({
    //     baseUrl: "http://localhost:5000/api/v1"
    // }),
    baseQuery: axiosBaseQuery(),
    endpoints: () => ({}),
})