import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenthicated = true;

  get userIsAuthenticated() {
    return this._userIsAuthenthicated;
  }

  constructor() { }

  login() {
    this._userIsAuthenthicated = true;
  }

  logout() {
    this._userIsAuthenthicated = false;
  }

}
