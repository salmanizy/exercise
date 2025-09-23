import { create } from "zustand";

export const useTodoStore = create((set, get) => ({ 
  todoList: [
    { id: 1, title: "Belajar React", counter: 0 }, 
    { id: 2, title: "Belajar Angular", counter: 0 }, 
    { id: 3, title: "Belajar Remix", counter: 0 }
  ],
  setTodoList: (newTodoList) => set({ todoList: newTodoList }),
  increaseCounter: (idx) => {
    const newTodoList = [...get().todoList];
    newTodoList[idx].counter = newTodoList[idx].counter + 1;
    set({ todoList: newTodoList });
  }
}));
