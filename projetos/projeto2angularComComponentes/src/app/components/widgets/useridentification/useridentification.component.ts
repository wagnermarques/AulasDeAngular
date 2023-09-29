import { Component } from '@angular/core';

@Component({
  selector: 'app-useridentification',
  templateUrl: './useridentification.component.html',
  styleUrls: ['./useridentification.component.css']
})
export class UseridentificationComponent {
  loggedIn: boolean = false;
  username: string = '';

  isUserLoggedIn(): boolean {
    return this.loggedIn;
  }

  login() {
    // Implement login logic and set this.loggedIn and this.username accordingly
    this.loggedIn = true;
    this.username = 'John Doe'; // Replace with the actual username
  }

  logout() {
    // Implement logout logic
    this.loggedIn = false;
    this.username = '';
  }
}
