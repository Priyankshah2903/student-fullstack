import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
    student: Student=new Student();
   constructor(private studentService: StudentServiceService,private router:Router){

   }
    addStudentData(){
          this.studentService.addStudent(this.student).subscribe(data=>{
            alert("student Data Insert Successfully");
            this.gotoListOfStudentPage();
          },error=>alert("Sorry Unable to insert student data"))
    }
    gotoListOfStudentPage(){
       this.router.navigate(['/students']);
    }
}
