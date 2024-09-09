import { Component,Input } from '@angular/core';
import { A3Classpatparvm } from '../classPatparvm';

@Component({
  selector: 'app-header-patparvm',
  templateUrl: './header-patparvm.component.html',
  styleUrl: './header-patparvm.component.css'
})
export class HeaderPatparvmComponent {

  @Input() HFpatparvm!: A3Classpatparvm;  
}
