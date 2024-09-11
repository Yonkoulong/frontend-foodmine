import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '@food-mine-fe/todo-list-ds-core-ang';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() taskList: Task.TaskItem[] = [];
  @Output() handleDeleteTask = new EventEmitter<string>();
  @Output() handleEditTask = new EventEmitter<Task.TaskItem>();
  @Output() handleUpdateStatusTask = new EventEmitter<Task.TaskItem>();

  isExpiryDate: boolean = false;

  constructor(public dialog: MatDialog) {}

  deleteTask(id: string) {    
    this.handleDeleteTask.emit(id);
  } 

  updateStatusTask(task: Task.TaskItem) {
    this.handleUpdateStatusTask.emit({...task, completed: !task.completed })
  }

  handleCalculateDateRemaining(deadline: string) {
    const currentDate = Date.now();
    const dateRemaining =  new Date(deadline).getTime() - currentDate;

    let dateResult = Math.round(dateRemaining / (1000 * 3600 * 24));
    
    if(dateResult < 0) {
      this.isExpiryDate = true;
    }
    
    return dateResult;
  }


  openDialog(task: any): void {
    let dialogRef : any;
    
    // this.taskService.getTaskById(task.id).subscribe({
    //   next: (task) => {
    //     dialogRef = this.dialog.open(AddTaskComponent, {
    //       data: task});
    //   },
    //   error: (error) => console.log(`Error: ${error}`)
    // })
  
    dialogRef?.afterClosed().subscribe((result: any) => {
      if(result) {   
        this.handleEditTask.emit(result);
      }
    });
  }
}