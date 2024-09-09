import { Component,Input } from '@angular/core';
import { A3Classpatparvm } from '../classPatparvm';

@Component({
  selector: 'app-footer-patparvm',
  templateUrl: './footer-patparvm.component.html',
  styleUrl: './footer-patparvm.component.css'
})
export class FooterPatparvmComponent {
  @Input() HFpatparvm!: A3Classpatparvm;

}
