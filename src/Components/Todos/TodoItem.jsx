import React from "react";

import { ListItemText, Button, Checkbox, TextField } from "@material-ui/core";

function TodoItem({ item, onClickDeleteItem, onCompleateChange }) {
  const [isСhanges, setIsChanges] = React.useState(false);
  const [currentItemText, setCurrentItemText] = React.useState(item.text);

  const toggleIsChanges = () => {
    setIsChanges(!isСhanges);
  };

  const currentItemTextChange = (e, value) => {
    setCurrentItemText(value);
  };

  return (
    <React.Fragment>
      <Checkbox
        color="primary"
        checked={item.isCompleate}
        onChange={() => onCompleateChange(!item.isCompleate, item.id)}
      />
      {!isСhanges ? (
        <ListItemText primary={item.text} />
      ) : (
        <TextField
          autoFocus
          multiline
          maxRows={4}
          value={currentItemText}
          onChange={currentItemTextChange}
          fullWidth
        />
      )}
      <div>{item.date}</div>
      {!isСhanges ? (
        <div>
          <Button variant="outlined" color="primary" onClick={toggleIsChanges}>
            Редактировать
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onClickDeleteItem(item.id)}
          >
            Удалить
          </Button>
        </div>
      ) : (
        <div>
          <Button variant="outlined" color="primary" onClick={toggleIsChanges}>
            Отмена
          </Button>
          <Button variant="outlined" color="primary">
            Применить
          </Button>
        </div>
      )}
    </React.Fragment>
  );
}

export default TodoItem;
