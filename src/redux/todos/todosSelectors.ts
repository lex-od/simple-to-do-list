import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getAllTodos = (state: RootState) => state.todos.items;

export const getActualTodos = createSelector([getAllTodos], (todos) => {
  return todos.filter(({ isDeleted }) => !isDeleted);
});

export const getDoneTodos = createSelector([getAllTodos], (todos) => {
  return todos.filter(({ isDone, isDeleted }) => isDone && !isDeleted);
});

export const getUndoneTodos = createSelector([getAllTodos], (todos) => {
  return todos.filter(({ isDone, isDeleted }) => !isDone && !isDeleted);
});

export const getDeletedTodos = createSelector([getAllTodos], (todos) => {
  return todos.filter(({ isDeleted }) => isDeleted);
});
