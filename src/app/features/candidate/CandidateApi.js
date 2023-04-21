import { createApi } from '@reduxjs/toolkit/query';

const candidatesApi = createApi({
  reducerPath: 'candidatesApi',
  baseQuery: () => {},
  endpoints: (builder) => ({
    addCandidate: builder.mutation({
      query: (candidate) => ({
        url: '/candidates',
        method: 'POST',
        body: candidate,
      }),
    }),
  }),
});

export default candidatesApi;