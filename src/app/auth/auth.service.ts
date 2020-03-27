import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenthicated = true;
  private _userId='xyz'

  get userIsAuthenticated() {
    return this._userIsAuthenthicated;
  }

  get userId() {
    return this._userId;
  }

  constructor() { }

  login() {
    this._userIsAuthenthicated = true;
  }

  logout() {
    this._userIsAuthenthicated = false;
  }

}
