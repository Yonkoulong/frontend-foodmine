import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodMineWelcomeModule } from './food-mine-welcome/food-mine-welcome.module';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'food-mine-manager';
}
