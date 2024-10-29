import { inject, Injectable } from '@angular/core';
import { Task, TaskDataService } from '@food-mine-fe/todo-list-ds-core-ang';
import { select, Store } from '@ngrx/store';
import * as actions from './actions';
import { selectTaskList, taskListActions } from './selectors';
import { Observable } from 'rxjs';
import { TaskState } from './state';

@Injectable()
export class TaskStoreService implements TaskDataService {
  private store = inject(Store<TaskState>);

  taskList$: Observable<Task.TaskList> = this.store.pipe(
    select(selectTaskList)
  );
  taskListAction$: Observable<any> = this.store.pipe(select(taskListActions));

  loadTaskList(payload: { filterParams: Task.FilterParams }): void {
    this.store.dispatch(actions.loadTaskList(payload));
  }

  paginateTaskList(payload: { paginationParams: Task.FilterParams }): void {
    this.store.dispatch(actions.paginateTaskList(payload));
  }
}
