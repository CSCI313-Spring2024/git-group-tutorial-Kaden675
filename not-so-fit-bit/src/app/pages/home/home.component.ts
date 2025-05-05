import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Day } from '../../day.service';
import { RouterLink } from '@angular/router';
import { DayService } from '../../day.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private authService = inject(AuthService);

  user = this.authService.getUser();
  
  days: Day[] = [];
  
    trackById(index: number, item: Day): string {
      return item.id;
    }
  
    
    constructor(private daysService: DayService){
      this.loadDays()
    }
  
    loadDays(){
      this.daysService.getDays().subscribe(data => this.days = data)
    }
  
    deleteDay(id:string){
      this.daysService.deleteDay(id).subscribe(() => this.loadDays)
    }
}
