import { HttpErrorResponse } from "@angular/common/http";
import { Task } from "@food-mine-fe/todo-list-ds-core-ang";
import { createAction, props } from "@ngrx/store";

export const loadTaskList = createAction(
    '[Todo List] Load Task List',
    props<{ filterParams: Task.FilterParams}>()
);

export const loadTaskListSuccess = createAction(
    '[Todo List] Load Task List Success',
    props<{
        taskList: Task.TaskList;
        filterParams?: Task.FilterParams;
    }>()
);

export const loadTaskListError = createAction(
    '[Todo List] Load Task List Error',
    props<{
        httpError: HttpErrorResponse;
    }>()
);

export const resetEntityState = createAction(
    '[Todo List] Reset Entity State', 
    props<{
        entity: Task.Entities;
    }>()
);

export const paginateTaskList = createAction(
    '[Todo List] Paginate Task List',
    props<{
        paginationParams: Task.PaginationParams
    }>()
);

export const paginateTaskListSuccess = createAction(
    '[Todo List Paginate Task List Success',
    props<{
        taskList: Task.TaskList
        paginationParams: Task.PaginationParams;
    }>(),
);

export const paginateTaskListError = createAction(
    '[Todo List Paginate Task List Error',
    props<{
        httpError: HttpErrorResponse;
    }>(),
)

