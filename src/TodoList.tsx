import axios from "axios";
import React, { useState } from "react";
import { TodoItemListProps } from "./lib/interfacies";
import { useQuery } from "react-query";

const getData = async () => {
  const { data } = await axios.get<TodoItemListProps[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data;
};

export default function TodoList() {
  const { data, isLoading, isError, error } = useQuery<
    TodoItemListProps[],
    Error
  >("todos", getData);
  //   const [todos, setTodos] = useState(initialTodo);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!!</div>;
  }

  return (
    <div>
      {data?.map((m) => (
        <ul key={m.id}>
          <li>
            <label>
              <input type="checkbox" defaultChecked={m.completed} />
              {m.title}
            </label>
          </li>
        </ul>
      ))}
    </div>
  );
}
