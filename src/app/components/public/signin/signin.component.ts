import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validator} from '@angular/forms'
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router"
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  constructor(builder:FormBuilder, private _http:HttpClient, private router:Router) {
    let signinformscontrol= {
      email: new FormControl(),
      password: new FormControl(),
      
   }
   this.signinForm=builder.group(signinformscontrol);
  }

  ngOnInit(): void {
  }

  get email(){return this.signinForm.get('email')}
  get password(){return this.signinForm.get('password')}
  

  signinUser(){
    console.log(this.signinForm.value);
    let data = this.signinForm.value
    this._http.post<any>("https://washapp-apis.herokuapp.com/client/login", data)
    .subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem("mytoken", result.token)
        this.router.navigateByUrl('/dashboard')
      },
      (error) => {
        console.log(error)
      }
    )
    
  }

}
