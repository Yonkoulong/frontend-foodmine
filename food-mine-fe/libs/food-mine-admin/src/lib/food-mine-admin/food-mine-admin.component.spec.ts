import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineAdminComponent } from './food-mine-admin.component';

describe('FoodMineAdminComponent', () => {
  let component: FoodMineAdminComponent;
  let fixture: ComponentFixture<FoodMineAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
