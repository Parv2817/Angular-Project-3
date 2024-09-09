import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardPatparvmService {

  constructor() { }

  patparvmChanges(id: any, degree: number)
  {
    const cardElement = document.getElementById(id);

    if (cardElement) 
    {
      cardElement.style.transitionDuration = '3s';
      cardElement.style.transform = `rotate(${degree}deg)`;
    } 
    else 
    {
      console.error(`Element with ID '${id}' not found.`);
    }
  }
}
