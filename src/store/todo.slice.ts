import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

export type Todos = {
  id: string;
  completed: boolean;
  text: string;
};

type InitialState = {
  entities: Todos[];
};

const initialState: InitialState = {
  entities: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ text: string }>) {
      const { text } = action.payload;

      state.entities.unshift({ id: nanoid(), text, completed: false });
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.entities.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.entities = state.entities.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export const todoReducer = todosSlice.reducer;
