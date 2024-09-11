import { Observable } from "rxjs";
import { Task } from "../model/task-definition";
import { InjectionToken } from "@angular/core";

export interface TaskDataService {
    readonly taskList$: Observable<Task.TaskList>;
    readonly taskListAction$: Observable<any>

    loadTaskList(): void;

    paginateTaskList(): void;
}

export const TaskDataService = new InjectionToken<TaskDataService>('TaskService');