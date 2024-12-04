import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

    firstName !: string;

    capitalCase(event : any){
        this.firstName = event;
    }
}
