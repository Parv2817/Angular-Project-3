import { Component } from '@angular/core';
import { CardPatparvmService } from '../card-patparvm.service';

@Component({
  selector: 'app-queen-patparvm',
  templateUrl: './queen-patparvm.component.html',
  styleUrl: './queen-patparvm.component.css'
})
export class QueenPatparvmComponent {

  patparvmTitle: String = "Queen Of Hearts";
  patparvmSuit = "Hearts";
  patparvmImage = "assets/images/queen.png";
  patparvmDegree = 240;
  patparvmZero = 0;

  constructor(private card: CardPatparvmService) {}

  patparvmRotate(suit: any, degree: number)
  {
    this.card.patparvmChanges(suit, degree);
  }
}
