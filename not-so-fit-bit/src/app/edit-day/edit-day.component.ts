import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DayService, Day } from '../day.service';

@Component({
  selector: 'app-edit-day',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-day.component.html',
  styleUrl: './edit-day.component.css'
})
export class EditDayComponent {

    day?: Day;
    date: string="";
    workout: string="";
    exerciseDuration: string="";
    fluid: string="";
    calorie: string="";

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private daysService: DayService
    ){}

  onSubmit(){
    if(this.day){
      this.daysService.deleteDay(this.day.id).subscribe(() => {
        
        this.daysService.addDay({
          date: this.date,
          workout: this.workout,
          exerciseDuration: this.exerciseDuration,
          fluid: this.fluid,
          calorie: this.calorie
        }).subscribe(()=>this.router.navigate(['home']));
      })
    }else{
      this.daysService.addDay({
        date: this.date,
        workout: this.workout,
        exerciseDuration: this.exerciseDuration,
        fluid: this.fluid,
        calorie: this.calorie
      }).subscribe(()=>this.router.navigate(['home']));
    }
  }

  onCancel(){
    this.router.navigate(['home'])
  }

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.daysService.getDayById(id).subscribe(day =>{
      if(day){
        this.day = day;
        this.date = day.date;
        this.workout = day.workout;
        this.exerciseDuration = day.exerciseDuration;
        this.fluid = day.fluid;
        this.calorie = day.calorie;
      }
    })
  }






}
