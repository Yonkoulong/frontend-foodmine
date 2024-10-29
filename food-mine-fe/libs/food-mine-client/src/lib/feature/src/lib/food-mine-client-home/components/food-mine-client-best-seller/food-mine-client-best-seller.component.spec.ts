import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientBestSellerComponent } from './food-mine-client-best-seller.component';

describe('FoodMineClientBestSellerComponent', () => {
  let component: FoodMineClientBestSellerComponent;
  let fixture: ComponentFixture<FoodMineClientBestSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientBestSellerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientBestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
