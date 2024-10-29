import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMineClientNotifyComponent } from './food-mine-client-notify.component';

describe('FoodMineClientNotifyComponent', () => {
  let component: FoodMineClientNotifyComponent;
  let fixture: ComponentFixture<FoodMineClientNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMineClientNotifyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMineClientNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
