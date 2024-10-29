import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientMenuDetailComponent } from './food-mine-client-home.component';

describe('FoodMineClientMenuDetailComponent', () => {
  let component: FoodMineClientMenuDetailComponent;
  let fixture: ComponentFixture<FoodMineClientMenuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientMenuDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientMenuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
