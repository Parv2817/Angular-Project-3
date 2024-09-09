import { Component } from '@angular/core';
import { CardPatparvmService } from '../card-patparvm.service';

@Component({
  selector: 'app-king-patparvm',
  templateUrl: './king-patparvm.component.html',
  styleUrl: './king-patparvm.component.css'
})
export class KingPatparvmComponent {

  patparvmTitle: String = "King Of Diamonds";
  patparvmSuit = "Diamonds";
  patparvmImage = "assets/images/king.png";
  patparvmDegree = 120;
  patparvmZero = 0;

  constructor(private card: CardPatparvmService) {}

  patparvmRotate(suit: any, degree: number)
  {
    this.card.patparvmChanges(suit, degree);
  }
}
