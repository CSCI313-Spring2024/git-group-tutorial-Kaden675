import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Input } from '@angular/core';
import { Day } from '../../day.service';
import { Router, RouterLink } from '@angular/router';
import { DayService } from '../../day.service';
import { CommonModule } from '@angular/common';
import { NewDayComponent } from '../../new-day/new-day.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, NewDayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private authService = inject(AuthService);

  user = this.authService.getUser();
  
  days: Day[] = [];
  
    trackById(index: number, item: any): any {
      return item.id;
    }
  
    
    constructor(private daysService: DayService){
      this.loadDays()
    }
  
    loadDays(){
      this.daysService.getDays().subscribe(data => this.days = data)
    }
  
    deleteDay(id:number){
      this.daysService.deleteDay(id).subscribe(() => this.loadDays())
    }
}
