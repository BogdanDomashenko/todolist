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

import { useDispatch } from "react-redux";

function Todos({
  items,
  onClickDeleteItem,
  onCompleateChange,
  activeTab,
  setActiveTab,
}) {
  const dispatch = useDispatch();

  const activeTabChange = (e, value) => {
    dispatch(setActiveTab(value));
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
                <Checkbox
                  color="primary"
                  checked={item.isCompleate}
                  onChange={() => onCompleateChange(!item.isCompleate, item.id)}
                />
                <ListItemText primary={item.text} />
                <div>{item.date}</div>
                <Button variant="outlined" color="primary">
                  Редактировать
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => onClickDeleteItem(item.id)}
                >
                  Удалить
                </Button>
              </ListItem>
            )
        )}
      </List>
    </div>
  );
}

export default Todos;
