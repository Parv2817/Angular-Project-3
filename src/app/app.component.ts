import { Component } from '@angular/core';
import { A3Classpatparvm } from './classPatparvm';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A3patparvm';

  profilePatparvm: A3Classpatparvm = {
    fullName991718111: "Parv Patel",
    id991718111: 991718111,
    email991718111: "patparvm@sheridancollege.ca",
    login991718111: "patparvm"
  }
}
