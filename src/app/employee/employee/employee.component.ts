import { Component } from '@angular/core';
import { IEmployee } from '../employee-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees = [] as IEmployee[];

  optionValue: number=1;
  empStatus=true;
  checkAllStatus=false;
  employee= {} as IEmployee;

  ngOnInit() : void {
    this.employees = [
      {empNumber:101, empName : 'Kranthi', empSalary: 80000, empAddress: 'Hyderabad',isSelected:false},
      {empNumber:102, empName : 'Ro', empSalary: 85000, empAddress: 'Hyderabad',isSelected:false},
      {empNumber:103, empName : 'Ko', empSalary: 60000, empAddress: '',isSelected:false},
      {empNumber:104, empName : 'Sur', empSalary: 80000, empAddress: 'Hyderabad',isSelected:false},
      {empNumber:105, empName : 'Var', empSalary: 80000, empAddress: '',isSelected:false},

    ]
  }

  public selectTab(val : number){
    this.optionValue= val;
  }

  public checkAll(){
    if(this.checkAllStatus){
      this.employees= this.employees.map((emp) => {
        emp.isSelected=true
        return emp;
      });
    }else{
      this.employees= this.employees.map((emp) => {
        emp.isSelected=false
        return emp;
      });
    }
  }

  public checkStatus(){
    let checkedEmployess=this.employees.filter((emp) => {
      if(emp.isSelected)
        return emp;
      else
      return null
    });
    if(checkedEmployess.length == this.employees.length)
      this.checkAllStatus=true;
    else
    this.checkAllStatus = false;
  }

  public addEmployee(f: NgForm){
    // console.log(this.employee)
    this.employees.push(this.employee);
    alert("Employee Added");
    this.employee= {} as IEmployee;
    f.resetForm();
  }
}
