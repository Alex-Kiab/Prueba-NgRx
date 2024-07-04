export interface TodoInterface {
  id: number;
  description: string;
  completed: boolean;
}

export const initialTodos: TodoInterface[] = [
  {
    id: 1,
    description: 'Tarea 1',
    completed: false,
  },
  {
    id: 2,
    description: 'Tarea 2',
    completed: false,
  },
  {
    id: 3,
    description: 'Tarea 3',
    completed: false,
  },
  {
    id: 4,
    description: 'Tarea 4',
    completed: false,
  },
];

export function createTodo(description: string) {}
