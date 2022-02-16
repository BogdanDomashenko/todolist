const initialState = {
  todoList: [
    { id: 1, isCompleate: true, text: "asiodiu", date: "19.02.2022" },
    { id: 2, isCompleate: false, text: "kjhjkhkh", date: "19.02.2022" },
  ],
  newTodoValue: "",
  activeTodosTab: 0,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const id = state.todoList.length + 1;

      let date = new Date();
      const dd = String(date.getDate()).padStart(2, "0");
      const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyy = date.getFullYear();

      date = mm + "." + dd + "." + yyyy;

      const newTodo = { id, isCompleate: false, text: action.payload, date };

      return {
        ...state,
        newTodoValue: "",
        todoList: [...state.todoList, newTodo],
      };
    case "SET_NEW_TODO_VALUE":
      return {
        ...state,
        newTodoValue: action.payload,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case "SET_TODO_COMPLEATE":
      state.todoList.find((todo) => todo.id === action.id);
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? { ...todo, isCompleate: action.payload }
            : todo
        ),
      };
    case "SET_ACTIVE_TODOS_TAB":
      return {
        ...state,
        activeTodosTab: action.payload,
      };
    default:
      return state;
  }
};

export default todos;
