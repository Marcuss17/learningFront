import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterServices {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  sendRegisterData(
    name: string,
    email: string,
    password: string
  ): Observable<any> {
    const data = {
      name,
      email,
      password,
    };

    return this.http.post(this.commonService.baseUrl + "/api/save-user", data);
  }
}
