import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
// Inject the Router
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    console.log()
  }

  onSubmit() {
    console.log("asdfasdf");
  }
  // Handle form submission
  //onSubmit() {
  //  alert("class LoginComponent.onSubmit() {...");
    // Implement your login logic here.
    // If login is successful, navigate back to MainscreenComponent.

    // Simulate a successful login for demonstration purposes
    //  const loginIsSuccessful = true; // Replace this with your actual login logic

    //if (loginIsSuccessful) {
    //  this.router.navigate(['/']); // Navigate to the default route (MainscreenComponent)
   // }
  //}
  
  
  // loggedIn: boolean = false;
  // username: string = '';

  // isUserLoggedIn(): boolean {
  //   return this.loggedIn;
  // }

  // login() {
  //   // Implement login logic and set this.loggedIn and this.username accordingly
  //   this.loggedIn = true;
  //   this.username = 'John Doe'; // Replace with the actual username
  // }

  // logout() {
  //   // Implement logout logic
  //   this.loggedIn = false;
  //   this.username = '';
  // }
}
