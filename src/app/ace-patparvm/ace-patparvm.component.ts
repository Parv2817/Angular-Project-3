import { Component } from '@angular/core';
import { CardPatparvmService } from '../card-patparvm.service';
@Component({
  selector: 'app-ace-patparvm',
  templateUrl: './ace-patparvm.component.html',
  styleUrl: './ace-patparvm.component.css'
})
export class AcePatparvmComponent {

  patparvmTitle: String = "Ace Of Spades";
  patparvmSuit = "Spades";
  patparvmImage = "assets/images/ace.png";
  patparvmDegree = 60;
  patparvmZero = 0;

  constructor(private card: CardPatparvmService) {}

  patparvmRotate(suit: any, degree: number)
  {
    this.card.patparvmChanges(suit, degree);
  }
}
