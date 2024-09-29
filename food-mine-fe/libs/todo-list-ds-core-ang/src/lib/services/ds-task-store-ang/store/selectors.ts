import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { TaskListActions, TaskState } from "./state";
import { Task } from '@food-mine-fe/todo-list-ds-core-ang';
const taskState = createFeatureSelector<TaskState>('todolist-task');

export const selectTaskList: MemoizedSelector<TaskState, Task.TaskList> = createSelector(
    taskState,
    (state: TaskState) => state.entities[Task.Entities.TaskList],
);

export const taskListFilters: MemoizedSelector<TaskState, TaskListActions> = createSelector(
    taskState,
    (state: TaskState) => state.actions[Task.Entities.TaskList]
)

export const taskListActions: MemoizedSelector<TaskState, TaskListActions> = createSelector(
    taskState,
    (state: TaskState) => state.actions[Task.Entities.TaskList],
)

