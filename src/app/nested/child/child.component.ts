import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

    @Input()  //Decorator
    firstname ! : string;

    @Output()
    fName : EventEmitter<any> = new EventEmitter<any>();

    convertToUpperCase(){
      this.fName.emit(this.firstname.toUpperCase());
    }
}
