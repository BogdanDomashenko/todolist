import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Button,
} from "@material-ui/core";

import { Todos } from "../Components";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, setActiveTodosTab } from "../redux/actions/todos";

function Home() {
  const [newTodoValue, setNewTodoValue] = useState("");

  const dispatch = useDispatch();

  const { todoList, activeTodosTab } = useSelector(({ todos }) => todos);

  const changeTodoValue = (e) => {
    setNewTodoValue(e.target.value);
  };

  const addTodoClick = () => {
    dispatch(addTodo(newTodoValue));
    dispatch(setActiveTodosTab(0));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id="outlined-multiline-flexible"
            label="Добавить задание"
            multiline
            maxRows={4}
            value={newTodoValue}
            onChange={(e) => changeTodoValue(e)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" fullWidth onClick={addTodoClick}>
            Добавить
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Todos
            items={todoList}
            activeTab={activeTodosTab}
            setActiveTab={setActiveTodosTab}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
