import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientBannerComponent } from './food-mine-client-banner.component';

describe('FoodMineClientBannerComponent', () => {
  let component: FoodMineClientBannerComponent;
  let fixture: ComponentFixture<FoodMineClientBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
