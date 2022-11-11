export interface TodoItemListProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoItmes {
  todos: TodoItemListProps;
}
