import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientHomeComponent } from './food-mine-client-home.component';

describe('FoodMineClientHomeComponent', () => {
  let component: FoodMineClientHomeComponent;
  let fixture: ComponentFixture<FoodMineClientHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
