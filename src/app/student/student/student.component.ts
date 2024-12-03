import { Component, OnInit } from '@angular/core';
import { Qualification, Student } from '../student-model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
    student = new Student();
    students = new Array<Student>();

    ngOnInit(): void {
        this.student.qualification.push({name: '', university : '', yearOfPass : '' , percentage : ''});
    }
    public addStudent(){
      console.log(this.student);
    }
    public addRow(){
      this.student.qualification.push({name: '', university : '', yearOfPass : '' , percentage : ''});
    }

    public deleteRow(){
      this.student.qualification.pop();
    }
}
