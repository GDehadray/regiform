import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { registerService } from './register.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regiform';
  public result :any;
  public employee:FormGroup;
  constructor(public service:registerService){
    this.employee = new FormGroup({
      fname : new FormControl("Ganesh",[Validators.required,
                                         Validators.minLength(3),
                                         Validators.maxLength(8)]),
       lname : new FormControl("IT",[Validators.required]),
       email : new FormControl("hr@ganeshit.com",[Validators.required,
                                                 Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{4,4}$")]),
       dob   : new FormControl(),
       gender : new FormControl(),
       languages: new FormControl(),
       country : new FormControl() 
    });
  }

     register(){
       this.service.saveEmployeeRecord(this.employee.value)
         .subscribe((posRes)=>{
             this.result = posRes;
         },(errRes:HttpErrorResponse)=>{
             console.log(errRes);
         });
     };
}
