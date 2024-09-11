import { NgModule } from "@angular/core";
import { TaskListModule } from "../../features/task-list/task-list.module";
import { TodoListDsCoreAngComponent } from "./todo-list-view-ang.component";

@NgModule({
    imports:[
        TaskListModule,
    ],
    declarations: [
        TodoListDsCoreAngComponent
    ],
})

export class TodoListViewModule {}