import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineAdminDsCoreAngComponent } from './food-mine-admin-ds-core-ang.component';

describe('FoodMineAdminDsCoreAngComponent', () => {
  let component: FoodMineAdminDsCoreAngComponent;
  let fixture: ComponentFixture<FoodMineAdminDsCoreAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineAdminDsCoreAngComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineAdminDsCoreAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
