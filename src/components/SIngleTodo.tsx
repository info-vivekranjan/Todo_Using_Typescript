import { Button, Box, Fab, Typography, TextField } from "@mui/material";
import React, { useRef, useState, useEffect, } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { Todo } from "../model/TodoInterface";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodoData: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodoData }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.title);
  const ref = useRef<HTMLInputElement>(null);
  const deleteTodo = (id: number) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodoData(filteredTodos);
  };
  const toggleTodo = (id: number) => {
    const filteredTodos = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodoData(filteredTodos);
  };
  const handleEdit = (): void => {
    setEdit(true);
  };
  const handleEditTodo = (e: React.KeyboardEvent, id: number): void => {
    if (e.key === "Enter") {
      const updatedTodo = todos.map((item) =>
        item.id === id ? { ...item, title: editTodo } : item
      );
      setTodoData(updatedTodo);
      setEdit(false);
    }
  };
  useEffect(() => {
    ref?.current?.focus();
  }, [edit]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: todo.status === true ? "2px solid green" : "2px solid orange",
        margin: "15px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ width: "60%", textAlign: "left" }}>
        {edit && todo?.status === false ? (
          <TextField
            id="single-standard-basic"
            variant="standard"
            value={editTodo}
            ref={ref}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditTodo(e.target.value)
            }
            onKeyDown={(e) => handleEditTodo(e, todo.id)}
            sx={{ width: "280px" }}
          />
        ) : !todo?.status ? (
          <Typography variant="h6">
            {todo.title}
          </Typography>
        ) : (
          <Typography variant="h6" style={{ textDecoration: "line-through" }}>
            {todo.title}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Fab size="small" color="primary">
          <EditIcon onClick={handleEdit} />
        </Fab>
        <Fab size="small" color="primary" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </Fab>
        <Fab size="small" color="primary" onClick={() => toggleTodo(todo.id)}>
          <CheckIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default SingleTodo;
