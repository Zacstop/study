import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ApiTest from "./ApiTest";

// const getData = async () => {
//   const { data } = await axios.get<TodoItemListProps>(
//     "https://jsonplaceholder.typicode.com/posts/1/comments"
//   );
//   return data;
// };

function App() {
  const queryClient = new QueryClient();
  // const { data, isLoading, isError } = useQuery<TodoItemListProps, Error>(
  //   "todos",
  //   getData
  // );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ApiTest />
        {/* <div style={{height: 100}}/>
        <Counter />
        <TodoList /> */}
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
