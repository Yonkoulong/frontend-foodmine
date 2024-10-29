import { Action, createReducer, on } from "@ngrx/store";
import { initialState, TaskState } from "./state";
import * as taskActions from './actions';
import { Task } from "@food-mine-fe/todo-list-ds-core-ang";

export const taskReducer = createReducer(
    initialState,
    on(taskActions.loadTaskList, (state) => ({
        ...state,
        actions: {
            ...state.actions,
            [Task.Entities.TaskList]: {
                ...state.actions[Task.Entities.TaskList],
                loading: {
                    processing: true,
                    httpError: undefined
                },
            },
        },
    })),
    on(taskActions.loadTaskListSuccess, (state, { taskList, filterParams }) => ({
        ...state,
        actions: {
            ...state.actions,
            [Task.Entities.TaskList]: {
                ...state.actions[Task.Entities.TaskList],
                loading: {
                    success: true,
                    processing: false,
                    httpError: undefined
                }
            }
        }
    })),
    on(taskActions.loadTaskListError, (state, { httpError }) => ({
        ...state,
        actions: {
            ...state.actions,
            [Task.Entities.TaskList]: {
                ...state.actions[Task.Entities.TaskList],
                loading: {
                    processing: false,
                    httpError: httpError
                }
            }
        }
    })),
    on(taskActions.paginateTaskList, (state) => ({
        ...state,
        actions: {
            ...state.actions,
            [Task.Entities.TaskList]: {
                ...state.actions[Task.Entities.TaskList],
                loading: {
                    processing: true,
                    httpError: undefined
                }
            }
        }
    })),
    on(taskActions.paginateTaskListSuccess, (state, { taskList, paginationParams }) => ({
        ...state,
        entities: {
            ...state.entities,
            [Task.Entities.TaskList]: taskList
        },
        filters: {
            ...state.filters,
            [Task.Entities.TaskList]: {
                ...state.filters[Task.Entities.TaskList],
                ...paginationParams
            }
        },
        actions: {
            ...state.actions,
            [Task.Entities.TaskList]: {
                ...state.actions[Task.Entities.TaskList],
                paginate: {
                    processing: false,
                    httpError: undefined
                }
            }
        }
    })),
    on(taskActions.paginateTaskListError, (state, { httpError }) => ({
        ...state,
        actions: {
            ...state.actions,
            [Task.Entities.TaskList]: {
                ...state.actions[Task.Entities.TaskList],
                loading: {
                    processing: false,
                    httpError: httpError
                }
            }
        }
    })),
    // on(taskActions.resetEntityState, (state, { entity }) => ({
    //     ...state,
    //     entities: {
    //         ...state.entities,
    //         [entity]: initialState.entities[entity],
    //     },
    //     actions: {
    //         ...state.actions,
    //         [entity]: initialState.actions[entity]
    //     }
    // }))
);

export function reducer(state: TaskState = initialState, action: Action): TaskState {
    return taskReducer(state, action);
}