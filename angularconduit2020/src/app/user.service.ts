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

  /**
 * go and get ArticlesEnvelope from the server ans store it locally
 */
get() {
  let request = this.httpClient.post("https://swindev.me/users/login",
  {
    user: {
      email: "string111",
      password: "string"
    }
  } as UserLoginCommand
  );

  request.subscribe((response) => {

  },
  (error) => {
    console.log("Error from https://swindev.me/users/login", error);
  }
  );
}
}
