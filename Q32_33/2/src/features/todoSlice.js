import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Belajar Redux", votes: 0 },
  { id: 2, text: "Belajar Angular", votes: 0 },
  { id: 3, text: "Belajar Remix", votes: 0 },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    incrementVote: (state, action) => {
      const { id } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.votes += 1;
      }
    },
  },
});

export const { addTodo, incrementVote } = todoSlice.actions;
export default todoSlice.reducer;
