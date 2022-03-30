import React, { useState } from "react";
import { Fab, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Todo } from "../model/TodoInterface";
import TodoList from "./TodoList";
import { Box } from "@mui/system";

const Todos: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [todoData, setTodoData] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const addTodo = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    if (query !== "") {
      const payload = {
        id: Date.now(),
        title: query,
        status: false,
      };
      setTodoData([...todoData, payload]);
      setQuery("");
    }
  };

  console.log(todoData);
  return (
    <Box
      sx={{
        width: "50%",
        height: "90vh",
        margin: "auto",
        marginTop: "5vh",
        boxShadow:'3px 3px 6px 8px cyan',
        overflowY: "scroll",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ backgroundColor: 'cyan', position: 'fixed', width: '49.5%', zIndex: 1000000, boxShadow:'3px 10px 6px 8px cyan'}}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h4">Todos List</Typography>
        </Box>

        <TextField
          id="standard-basic"
          label="Enter todo"
          variant="standard"
          onChange={handleChange}
          value={query}
          sx={{ width: "60%" }}
        />
        <Fab color="primary" aria-label="add" onClick={addTodo}>
          <AddIcon />
        </Fab>
      </Box>

      <TodoList todos={todoData} setTodoData={setTodoData} />
    </Box>
  );
};

export default Todos;
