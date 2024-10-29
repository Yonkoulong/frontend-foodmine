import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientFeaturesComponent } from './food-mine-client-Features.component';

describe('FoodMineClientFeaturesComponent', () => {
  let component: FoodMineClientFeaturesComponent;
  let fixture: ComponentFixture<FoodMineClientFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientFeaturesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
