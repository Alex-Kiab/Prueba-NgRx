import { createAction, props } from '@ngrx/store';
import { TodoInterface } from 'src/app/model/model';

export const init = createAction('[Main page] Init');

export const addTodo = createAction(
  '[Main page] Add Todo',
  props<{ todo: TodoInterface }>()
);

export const removeTodo = createAction(
  '[Main page] Remove Todo',
  props<{ todo: TodoInterface }>()
);

export const markAsCompleted = createAction(
  '[Main page] Mark as Completed',
  props<{ todo: TodoInterface }>()
);

export const markAsPending = createAction(
  '[Main page] Mark as Pending',
  props<{ todo: TodoInterface }>()
);

export const clearCompleted = createAction('[Main page] Clear Completed');
