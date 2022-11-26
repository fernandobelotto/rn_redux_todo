import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const item = "item";
const user = "user";

export const api = createApi({
  reducerPath: "api",
  tagTypes: [item, user],
  baseQuery: fetchBaseQuery({
    baseUrl: "localhost:8000",
  }),
  endpoints: (build) => ({}),
});
