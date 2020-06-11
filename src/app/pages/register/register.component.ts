import { Component, OnInit } from "@angular/core";
import { RegisterObj } from "src/app/core/models/registerObj";
import { Router } from "@angular/router";
import { RegisterServices } from "src/app/core/services/register";
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [RegisterObj],
})
export class RegisterComponent implements OnInit {
  public registerObj: RegisterObj;

  constructor(
    private router: Router,
    private registerServices: RegisterServices
  ) {
    this.registerObj = new RegisterObj();
  }

  ngOnInit() {}

  regClick() {
    console.log(this.registerObj);
    this.registerServices
      .sendRegisterData(
        this.registerObj.name,
        this.registerObj.lastName,
        this.registerObj.email,
        this.registerObj.username,
        this.registerObj.age,
        this.registerObj.country,
        this.registerObj.password
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
