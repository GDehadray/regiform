import {Injectable } from "@angular/core";
import {HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
    providedIn:"root"
})

 export class registerService{
     constructor(public http:HttpClient){}
     public saveEmployeeRecord(data:any):Observable<any>{
         return this.http.post("http://localhost:8080/registration",data);
     };
 };