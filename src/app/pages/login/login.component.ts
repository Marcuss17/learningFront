import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginObj } from "src/app/core/models/loginObj";
import { LoginService } from "src/app/core/services/login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [LoginObj],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginObj: LoginObj;
  constructor(private router: Router, private loginService: LoginService) {
    this.loginObj = new LoginObj();
  }

  ngOnInit() {}
  ngOnDestroy() {}

  logIn() {
    console.log(this.loginObj);
    // this.loginService.logIn(this.loginObj.name, this.loginObj.password).subscribe(
    //   response => {
    //     console.log(response);
    //   }, error => {
    //     console.log(error);
    //   }
    // )
  }

  goReg() {
    this.router.navigateByUrl("/register");
  }
}
