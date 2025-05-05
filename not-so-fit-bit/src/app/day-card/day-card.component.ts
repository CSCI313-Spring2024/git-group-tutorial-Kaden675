import { Component, Input } from '@angular/core';
import { Day } from '../day.service';
import { RouterLink } from '@angular/router';
import { DayService } from '../day.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './day-card.component.html',
  styleUrl: './day-card.component.css'
})
export class DayCardComponent {

  days: Day[] = [];

  
  constructor(private daysService: DayService){
    this.loadDays()
  }

  loadDays(){
    this.daysService.getDays().subscribe(data => this.days = data)
  }

  deleteDay(id: string){
    this.daysService.deleteDay(id).subscribe(() => this.loadDays())
  }

  trackById(index: number, item: Day): string {
    return item.id;
  }
}
