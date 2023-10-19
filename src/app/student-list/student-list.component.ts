import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    students : Student[]=[];
    constructor(private studentService:StudentServiceService){

    }
    ngOnInit() : void{
      this.getAllStudents();
    }
    getAllStudents(){
      this.studentService.getAllStudent().subscribe((data: Student[])=>{
        this.students=data;
      }
        )
    }
}
