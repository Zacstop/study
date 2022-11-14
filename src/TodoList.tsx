import axios from "axios";
import { TodoItemListProps } from "./lib/interfacies";
import { useQuery } from "react-query";

const getData = async () => {
  const { data } = await axios.get<TodoItemListProps[]>(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  return data;
};

export default function TodoList() {
  const { data, isLoading, isError } = useQuery<TodoItemListProps[], Error>(
    "todos",
    getData
  );

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
              {/* <input type="checkbox" /> */}
              <p>{m.name}</p>
              <p>{m.email}</p>
              <p>{m.body}</p>
              <br />
            </label>
          </li>
        </ul>
      ))}
    </div>
  );
}
