import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseTaskService, Task, TaskDataService } from '@food-mine-fe/todo-list-ds-core-ang';
import { debounceTime, Subject } from 'rxjs';
import { AddTaskComponent } from '../../shared/components/dialog/add-task/add-task.component';
import { TYPE_OF_DIALOG } from '../../shared/constants/todo-list-constant';
import { Store } from '@ngrx/store';
import { selectTaskList } from '../../services/ds-task-store-ang/store/selectors';
import * as TaskActions from '../../services/ds-task-store-ang/store/actions';
import { TaskState } from '../../services/ds-task-store-ang/store/state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  // Signals for Task List and Pagination
  tasks = signal<Task.TaskItem[]>([]);
  tootalPages = signal<number>(0);

  taskValue: string = '';
  // tasks: Task.TaskList = {};
  taskEdit: Task.TaskItem | any = null;
  isOpenCreateCategoryPopup: boolean = false;
  currentCategoryId: string = 'as';
  taskRemaining: Task.TaskItem[] = [];
  inputText: string = '';
  isLoading: boolean = false;
  fromPage: number = 1;
  size = 10;
  private searchTask = new Subject<string>();
  private readonly debounceTimeMs = 300;

  constructor(public dialog: MatDialog, private taskDataService: TaskDataService) {
    // Effect to update signal whenever the task list in the store changes
    effect(
      () => {
        this.taskDataService.taskList$.subscribe((taskList) => {
          console.log(taskList);
          
          this.tasks.set(taskList?.items || []);
          this.tootalPages.set(taskList?.totalPages || 0);
        })
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    this.handleFetchTasks();
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
    this.searchTask.complete();
  }

  // Compute derived state (For example: tasks count)
  totalTasks = computed(() => this.tasks().length);

  handleDeleteTask(id: string) {
    // this.taskService.deleteTask(id).subscribe({
    //   next: () => this.handleFetchTasks(this.currentCategoryId || 0),
    //   error: (error) => console.log(`Error: ${error}`),
    //   complete: () => console.info('')
    // });
  }

  handleEditTask(task: Task.TaskItem) {
    this.taskEdit = task;
    this.handleFetchTasks();
  }

  handleUpdateStatusTask(task: Task.TaskItem) {
    if (!task) {
      return;
    }
    // this.taskService.editTask(task).subscribe({
    //   next: () => this.handleFetchTasks(this.currentCategoryId || 0),
    //   error: (error) => console.log(`Error: ${error}`),
    //   complete: () => console.info('')
    // });
  }

  handleFilterTaskByCategory(category: Task.Category) {
    // this.currentCategoryId = category?.id;
    // this.handleFetchTasks(category?.id);
  }

  handleFetchTasks() {
    this.taskDataService.loadTaskList({ filterParams: {
      keyword: this.inputText,
      from: this.fromPage,
      size: this.size
    }});
  }

  onSearch() {
    this.isLoading = true;
    this.searchTask.next(this.inputText);
  }

  performSearch(value: string) {
    // if(value) {
    //   const listTaskSearched = this.tasks?.items || [].filter((task: Task.TaskItem) => task?.title.includes(value))
    //   this.tasks = listTaskSearched;
    // } else {
    //   this.handleFetchTasks(this.currentCategoryId || "0");
    // }

    this.isLoading = false;
  }

  openDialogCreateTask(): void {
    this.open(AddTaskComponent, {}, TYPE_OF_DIALOG.CREATE);
  }

  openDialogConfirm(id: string) {
    // this.open(ConfirmComponent, {
    //   title: 'Warning',
    //   icon: '',
    //   description: 'Are you sure to delete this task',
    //   taskId: id
    // }, TYPE_OF_DIALOG.DELETE)
  }

  open(com: any, data: any, purpose: string) {
    const dialogRef = this.dialog.open(com, { data });

    dialogRef?.afterClosed().subscribe((result) => {
      if (result) {
        switch (
          purpose
          // case TYPE_OF_DIALOG.CREATE: this.handleFetchTasks(this.currentCategoryId || 0);
          // break;
          // case TYPE_OF_DIALOG.DELETE: this.handleDeleteTask(data?.taskId);
          // break;
        ) {
        }
      }
    });
  }
}
