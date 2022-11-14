export interface TodoItemListProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface TodoItmes {
  todos: TodoItemListProps;
}
