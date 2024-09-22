import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    // false: 'PENDING' and true: 'DONE'
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

// Based on fetch status we're rendering itemsSlice's DEFAULT_ITEMS

// Here I am maintaining two variables(FetchDone, currentlyFetching), curretlyFetching ischecking whether there is a server call and based on that I'll show a loader,
// and the other is to check if the fetching is done.

// currentlyFetching, can return data or a promise.
// fetchingDone makes sure fetching is done.
