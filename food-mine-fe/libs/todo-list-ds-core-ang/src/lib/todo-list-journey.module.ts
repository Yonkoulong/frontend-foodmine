import { NgModule } from '@angular/core';
import { Route, ROUTES } from '@angular/router';
import { StoreModule } from '@ngrx/store'; 
import { TodoListDsCoreAngComponent } from './views/todo-list-view/todo-list-view-ang.component';
import { TodoListViewModule } from './views/todo-list-view/todo-list-view.module';
import { taskReducer } from './services/ds-task-store-ang/store/reducers';

const routes: Route[] = [
  {
    path: '',
    component: TodoListDsCoreAngComponent,
  },
];

@NgModule({
  imports: [
    TodoListViewModule,
    StoreModule.forRoot({ 'todolist-task': taskReducer })
  ],
  providers: [
    {
      provide: ROUTES,
      multi: true,
      useValue: routes,
    },
  ],
})
export class TodoJourneyModule {}
