import { Component } from '@angular/core';
import { CardPatparvmService } from '../card-patparvm.service';

@Component({
  selector: 'app-jack-patparvm',
  templateUrl: './jack-patparvm.component.html',
  styleUrl: './jack-patparvm.component.css'
})
export class JackPatparvmComponent {

  patparvmTitle: String = "Jack Of Clubs";
  patparvmSuit = "Clubs";
  patparvmImage = "assets/images/jack.png";
  patparvmDegree = 280;
  patparvmZero = 0;

  constructor(private card: CardPatparvmService) {}

  patparvmRotate(suit: any, degree: number)
  {
    this.card.patparvmChanges(suit, degree);
  }
}
