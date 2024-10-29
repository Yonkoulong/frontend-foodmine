import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { environment } from 'environment';
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  firebaseConfig = environment.firebase;
  
  constructor() {
    initializeApp(this.firebaseConfig);

    // Initialize other Firebase services if necessary
    getDatabase(); // For Realtime Database
  }
}
