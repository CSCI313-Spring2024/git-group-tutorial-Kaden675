import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Day {
  id: number,
  date: string,
  workout: string,
  exercise: string,
  fluid: number,
  calorie: number,
}

@Injectable({
  providedIn: 'root'
})


export class DayService {

  constructor() { }
}
