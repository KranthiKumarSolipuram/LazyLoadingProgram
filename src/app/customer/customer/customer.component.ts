import { Component } from '@angular/core';
import { ICustomer } from '../customer-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
    customer= {} as ICustomer;
    customers=[] as ICustomer[];

    custFormGroup!: FormGroup;
    submitted=false;

    constructor(private _formBuilder : FormBuilder){

    }

    ngOnInit() : void{
      this.custFormGroup=this._formBuilder.group({
        custNumber : [null, Validators.required],
        custName : [null,Validators.required],
        custAmount : [null, Validators.required],
        custAddress : [null]
      });

      this.customers = [
        {custNumber : 101, custName : "God", custAmount : 99999,custAddress : "Heaven"}
      ]
    }

    public  get f() {
      return this.custFormGroup.controls
    }

    public addCustomer(){
      this.submitted=true;
      if(this.custFormGroup.invalid){
        return;
      }
      this.customer=this.custFormGroup.value;
      this.customers.push(this.customer);
      alert("Customer Added");
      this.submitted=false;
    }
}
