import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   dataForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
      this.dataForm=formBuilder.group({
      Name:  new FormControl(),
      Age: new FormControl(),
      Place: new FormControl()
    });
  }
  
    ngOnInit(): void {
    }
    
    // date: Date = new Date();  
    //obj: { s_no: number,name: string, age: number, place: string, date:Date; }
    s:number=1;
    name:string;
    age:number;
    place:string;
    obj: {
      s_no: number;
      name: string;
      age: number;
      place: string;
      date:number;
  }
    objarray: {
      s_no: number;
      name: string;
      age: number;
      place: string;
      date:Date;
  }[]=[];
    postData(){
      this.objarray.push({s_no:this.s,
        name:this.dataForm.value.Name,
        age:this.dataForm.value.Age,
        place:this.dataForm.value.Place,
        date: new Date()
        //date:this.date.getFullYear()
      });
      console.log(this.objarray);
      this.s=this.s+1;
      this.dataForm.reset();
    }
   
    deleteData(emp){
      this.objarray.splice(this.objarray.lastIndexOf(emp),1);
    }
    
  }
  
