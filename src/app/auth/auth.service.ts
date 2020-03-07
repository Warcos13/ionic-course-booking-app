import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenthicated = false;

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
