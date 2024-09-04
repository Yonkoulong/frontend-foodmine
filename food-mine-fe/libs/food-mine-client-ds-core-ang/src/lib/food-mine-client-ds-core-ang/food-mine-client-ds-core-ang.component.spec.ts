import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientDsCoreAngComponent } from './food-mine-client-ds-core-ang.component';

describe('FoodMineClientDsCoreAngComponent', () => {
  let component: FoodMineClientDsCoreAngComponent;
  let fixture: ComponentFixture<FoodMineClientDsCoreAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientDsCoreAngComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientDsCoreAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
