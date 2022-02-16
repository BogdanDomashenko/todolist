export const addTodo = (todoText) => {
  return {
    type: "ADD_TODO",
    payload: todoText,
  };
};

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const setNewTodoValue = (value) => ({
  type: "SET_NEW_TODO_VALUE",
  payload: value,
});

export const setTodoCompleate = (value, id) => ({
  type: "SET_TODO_COMPLEATE",
  id,
  payload: value,
});

export const setActiveTodosTab = (tab) => ({
  type: "SET_ACTIVE_TODOS_TAB",
  payload: tab,
});
