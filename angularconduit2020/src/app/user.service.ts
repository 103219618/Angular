import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginCommand, UserLoginUserData } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient : HttpClient
  ) { }

user: User;
loading : boolean = false;


login(email: string, password: string) {
  let request = this.httpClient.post("https://swindev.me/users/login",
  {
    user: {
      //email: "gekki@bob.com",
      //password: "MyPasswordIsSecure12340"

      email: email, //"string",
      password: password //"string"
    }
  } as UserLoginCommand
  );

  request.subscribe((response) => {
    console.log(response);

  },
  (error) => {
    if(error.status == 401) {
      alert("Login Failed. Wrong Username and Password!")
    }
    console.log("Error from https://swindev.me/users/login", error);
  }
  );
}
}
