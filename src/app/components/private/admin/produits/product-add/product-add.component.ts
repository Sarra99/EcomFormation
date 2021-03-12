import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validator} from '@angular/forms'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(builder:FormBuilder) {
    let registerformscontrol= {
      nom: new FormControl(),
      description: new FormControl(),
      quantite: new FormControl(),
      date: new FormControl(),
   }
   this.registerForm=builder.group(registerformscontrol);
  }

  ngOnInit(): void {
  }
  get nom(){return this.registerForm.get('nom')}
  get description(){return this.registerForm.get('description')}
  get quantite(){return this.registerForm.get('quantite')}
  get date(){return this.registerForm.get('date')}


  registerCategory(){
    console.log(this.registerForm.value)
  }

}
