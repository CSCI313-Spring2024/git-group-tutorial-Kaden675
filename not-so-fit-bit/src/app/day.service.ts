import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Day {
  id: number,
  date: string,
  workout: string,
  exerciseDuration: string,
  fluid: string,
  calorie: number,
}

@Injectable({
  providedIn: 'root'
})


export class DayService {

  private Days: Day[] = [
    {
      id: 99999,
      date: "April 26",
      workout: "bench",
      exerciseDuration: "1 hour",
      fluid: "1 liter",
      calorie: 2000 
    },

]

private nextId = this.Days.length;

  constructor() { }

  getDays(){
    return of([...this.Days]);
  }

  getDayById(id: number){
    return of(this.Days.find( Days => Days.id === id)!);
  }

  addDay(day: Omit<Day, 'id'>){
    const newDay = {...day, id: this.nextId++};
    this.Days.push(newDay);
    return of(newDay)
  }
  updateDay(id: number, updated: Partial<Day>){
    const index = this.Days.findIndex( days => days.id === id);
    if(index !== -1){
      this.Days[index]={...this.Days[index], ...updated};
    }
  }
  deleteDay(id:number){
    this.Days = this.Days.filter(Days=>Days.id !== id);
    return of(true)
  }
}
