import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListDsCoreAngComponent } from './todo-list-ds-core-ang.component';

describe('TodoListDsCoreAngComponent', () => {
  let component: TodoListDsCoreAngComponent;
  let fixture: ComponentFixture<TodoListDsCoreAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListDsCoreAngComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListDsCoreAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
