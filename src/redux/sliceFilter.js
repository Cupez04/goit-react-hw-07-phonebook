import { createSlice } from "@reduxjs/toolkit";


export const sliceFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        searchQuery(_, {payload}) {
        return payload;
      },
    },
  });

export const { searchQuery} = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;