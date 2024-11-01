import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseTaskService, Task } from '@food-mine-fe/todo-list-ds-core-ang';
import { AddCategoryComponent } from '../../shared/components/dialog/add-category/add-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Task.Category[] = [];
  categoryIdActive: string = '0';

  @Output() categoryChange = new EventEmitter<Task.Category>();

  constructor(
    public dialog: MatDialog,
    private firebaseTaskService: FirebaseTaskService
  ) {}

  ngOnInit(): void {
    this.handleFetchCategories();
  }

  handleCategoryChange(category: Task.Category) {
    this.categoryIdActive = category.id;
    this.categoryChange.emit(category);
  }

  handleFetchCategories() {
    this.firebaseTaskService.getCategories().subscribe({
      next: (categories) =>
        (this.categories = [{ id: '0', name: 'All' }, ...categories]),
      error: (error) => console.log(error),
      complete: () => console.info(''),
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      data: null,
    });

    dialogRef?.afterClosed().subscribe((result: any) => {
      if (result) {
        this.handleFetchCategories();
      }
    });
  }
}
