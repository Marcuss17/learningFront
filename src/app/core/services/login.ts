import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  logIn(email: string, password: string): Observable<any> {
    const data = {
      email,
      password,
    };

    return this.http.post(this.commonService.baseUrl + "/api/log-in", data);
  }
}
