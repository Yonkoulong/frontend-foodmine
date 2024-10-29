import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientOrderComponent } from './food-mine-client-order.component';

describe('FoodMineClientOrderComponent', () => {
  let component: FoodMineClientOrderComponent;
  let fixture: ComponentFixture<FoodMineClientOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
