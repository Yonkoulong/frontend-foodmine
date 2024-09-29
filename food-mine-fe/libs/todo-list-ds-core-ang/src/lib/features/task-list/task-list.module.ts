import { NgModule } from "@angular/core";
import { TaskListComponent } from "./task-list.component";
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskDetailComponent } from "../task-detail/task-detail.component";
import { CategoryComponent } from "../category/category.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { AddTaskComponent } from "../../shared/components/dialog/add-task/add-task.component";
import { AddCategoryComponent } from "../../shared/components/dialog/add-category/add-category.component";
import { ToRequiredPipe } from "../../shared/pipes/toRequire.pipe";
import { ExpiryDateTaskPipe } from "../../shared/pipes/expiryDateTask.pipe";


const MaterialModule = [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatDialogModule
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...MaterialModule,
    ],
    declarations: [
        TaskListComponent,
        TaskItemComponent,
        TaskDetailComponent,
        CategoryComponent,
        AddTaskComponent,
        AddCategoryComponent,
        ToRequiredPipe,
        ExpiryDateTaskPipe
    ],
    exports: [
        TaskListComponent
    ]
})

export class TaskListModule {

}