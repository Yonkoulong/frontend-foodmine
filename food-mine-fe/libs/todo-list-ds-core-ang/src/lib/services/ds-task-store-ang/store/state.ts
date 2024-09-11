import { HttpErrorResponse } from '@angular/common/http';
import { Task } from '@food-mine-fe/todo-list-ds-core-ang';

export interface TaskActionState {
    processing: boolean;
    httpError: HttpErrorResponse | undefined;
    success?: boolean;
}

export type TaskListActions = Record<'loading' | 'paginate', TaskActionState>;

export interface TaskState {
    entities: {
        [Task.Entities.TaskList]: Task.TaskList
    };
    filters: {
        [Task.Entities.TaskList]: Task.FilterParams | {}
    };
    actions: {
        [Task.Entities.TaskList]: TaskListActions;
    }
}

export const initialState: TaskState = {
    entities: {
        [Task.Entities.TaskList]: {
            items: [],
            totalItems: 0
        }
    },
    filters: {
        [Task.Entities.TaskList]: {}
    },
    actions: {
        [Task.Entities.TaskList]: {
            loading: {
                processing: false,
                httpError: undefined
            },
            paginate: {
                processing: false,
                httpError: undefined
            },
        }
    }

}