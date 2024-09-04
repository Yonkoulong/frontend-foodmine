import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientComponent } from './food-mine-client.component';

describe('FoodMineClientComponent', () => {
  let component: FoodMineClientComponent;
  let fixture: ComponentFixture<FoodMineClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
