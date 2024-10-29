import { NgModule } from '@angular/core';
import { Route, ROUTES } from '@angular/router';
import { provideState, provideStore, StoreModule } from '@ngrx/store'; 
import { taskReducer } from './services/ds-task-store-ang/store/reducers';
import { TaskEffects } from './services/ds-task-store-ang/store/effects';
import { TaskDataService } from './common/src';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { TodoListDsCoreAngComponent } from './views/todo-list-view/todo-list-view-ang.component';
import { TodoListViewModule } from './views/todo-list-view/todo-list-view.module';
import { TaskStoreService } from './services/ds-task-store-ang/store/task.service';

const routes: Route[] = [
  {
    path: '',
    component: TodoListDsCoreAngComponent,
    providers: [
      provideEffects(TaskEffects)
    ]
  },
];

@NgModule({
  imports: [
    TodoListViewModule,
  ],
  providers: [
    provideState({ name: 'todolist-task', reducer: taskReducer }),
    {
      provide: ROUTES,
      multi: true,
      useValue: routes,
    },
    {
      provide: TaskDataService,
      useClass: TaskStoreService
    }
  ],
})
export class TodoJourneyModule {}
