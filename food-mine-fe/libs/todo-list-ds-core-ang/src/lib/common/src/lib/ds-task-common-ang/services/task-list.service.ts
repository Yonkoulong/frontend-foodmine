import { Observable } from "rxjs";
import { Task } from '@food-mine-fe/todo-list-ds-core-ang';
import { InjectionToken } from "@angular/core";

export interface TaskDataService {
    readonly taskList$: Observable<Task.TaskList>;
    readonly taskListAction$: Observable<any>

    loadTaskList(payload: { filterParams: Task.FilterParams}): void;

    paginateTaskList(payload: { paginationParams: Task.PaginationParams }): void;
}

export const TaskDataService = new InjectionToken<TaskDataService>('TaskService');