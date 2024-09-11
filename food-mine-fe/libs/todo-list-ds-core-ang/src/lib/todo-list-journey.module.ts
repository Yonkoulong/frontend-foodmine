import { NgModule } from '@angular/core';
import { Route, ROUTES } from '@angular/router';
import { TodoListDsCoreAngComponent } from './views/todo-list-view/todo-list-view-ang.component';
import { TodoListViewModule } from './views/todo-list-view/todo-list-view.module';

const routes: Route[] = [
  {
    path: '',
    component: TodoListDsCoreAngComponent,
  },
];

@NgModule({
  imports: [
    TodoListViewModule,
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
