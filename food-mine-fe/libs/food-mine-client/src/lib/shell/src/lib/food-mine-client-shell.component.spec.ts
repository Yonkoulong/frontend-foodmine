import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientShellComponent } from './food-mine-client-shell.component';

describe('FoodMineClientShellComponent', () => {
  let component: FoodMineClientShellComponent;
  let fixture: ComponentFixture<FoodMineClientShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
