import { Component, OnInit } from '@angular/core';
import { RegisterObj} from 'src/app/models/registerObj';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterObj]
})
export class RegisterComponent implements OnInit {

  public registerObj: RegisterObj;

  constructor(
  ) { }

  ngOnInit() {
  }

  regClick(){
    console.log(this.registerObj.email);
  }
  

}
