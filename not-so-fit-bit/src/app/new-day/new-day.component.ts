import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DayService } from '../day.service';

@Component({
  selector: 'app-new-day',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-day.component.html',
  styleUrl: './new-day.component.css'
})
export class NewDayComponent {

  date= "";
  workout= "";
  exerciseDuration= "";
  fluid= "";
  calorie="";

  constructor(
    private dayService: DayService,
    private router: Router
  ){}

  onSubmit(){
    this.dayService.addDay({
      date: this.date,
      workout: this.workout,
      exerciseDuration: this.exerciseDuration,
      fluid: this.fluid,
      calorie: this.calorie
    }).subscribe(() => this.router.navigate(['/home']))
  }

  onCancel(){
    this.router.navigate(['/home'])
  }
}
