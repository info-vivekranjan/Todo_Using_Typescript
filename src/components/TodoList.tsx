import { Box } from "@mui/material";
import React from "react";
import { Todo } from "../model/TodoInterface";
import SingleTodo from "./SIngleTodo";

interface Props {
  todos: Todo[];
  setTodoData: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodoData }) => {
  return (
    <Box sx={{ maxWidth: "600px", margin: "15px auto", marginTop: "145px" }}>
      {todos.map((todo) => {
        return (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodoData={setTodoData}
            key={todo.id}
          />
        );
      })}
    </Box>
  );
};

export default TodoList;
