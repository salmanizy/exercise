import { createSlice } from "@reduxjs/toolkit";
import { incrementVote } from "./todoSlice";

const voteSlice = createSlice({
  name: "votes",
  initialState: {},
  reducers: {
    addVote: (state, action) => {
      const { id } = action.payload;
      if (!state[id]) {
        state[id] = 1;
      } else {
        state[id] += 1;
      }
    },
  },
});

export const addVoteAndUpdateTodo = (id) => (dispatch) => {
  dispatch(voteSlice.actions.addVote({ id }));
  dispatch(incrementVote({ id }));
};

export default voteSlice.reducer;
