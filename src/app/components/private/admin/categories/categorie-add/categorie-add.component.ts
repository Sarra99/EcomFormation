import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validator} from '@angular/forms'

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.scss']
})
export class CategorieAddComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(builder:FormBuilder) {
    let registerformscontrol= {
      nom: new FormControl(),
      description: new FormControl(),
      date: new FormControl(),
      
   }
   this.registerForm=builder.group(registerformscontrol);
  }

  ngOnInit(): void {
  }
  get nom(){return this.registerForm.get('nom')}
  get description(){return this.registerForm.get('description')}
  get date(){return this.registerForm.get('date')}

  registerCategory(){
    console.log(this.registerForm.value)
  }

}
