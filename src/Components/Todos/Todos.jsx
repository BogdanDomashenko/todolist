import React from "react";
import {
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Button,
  Checkbox,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, setTodoCompleate } from "../../redux/actions/todos";

import TodoItem from "./TodoItem";

function Todos({ items, activeTab, setActiveTab }) {
  const dispatch = useDispatch();

  const activeTabChange = (e, value) => {
    dispatch(setActiveTab(value));
  };

  const onClickDeleteItem = (id) => {
    dispatch(deleteTodo(id));
  };

  const onCompleateChange = (value, id) => {
    dispatch(setTodoCompleate(value, id));
  };

  return (
    <div>
      <Tabs value={activeTab} onChange={activeTabChange}>
        <Tab label="Активно" />
        <Tab label="Выполнено" />
      </Tabs>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {items.map(
          (item) =>
            item.isCompleate === Boolean(activeTab) && (
              <ListItem key={item.id} disableGutters>
                <TodoItem
                  item={item}
                  onCompleateChange={onCompleateChange}
                  onClickDeleteItem={onClickDeleteItem}
                />
              </ListItem>
            )
        )}
      </List>
    </div>
  );
}

export default Todos;
