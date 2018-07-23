// app/auth.service.ts

import { Injectable} from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Configure Auth0
  clientId = 'Kpohf0lVYOVRyK2-QjArHjqCq6kSdelz';
  domain = 'bittiger.auth0.com';
  lock = new Auth0Lock(this.clientId, this.domain, {});


  constructor(private http: Http) {
/*  this.lock.on("authenticated",(authResult) => {
    localStorage.setItem('id_token',authResult.idToken);
  })*/
  }

  public login() : Promise<Object> {
    return new Promise((resolve, reject) => {
      // Call the show method to display the widget.
      this.lock.show((error: string, profile: Object, id_token: string) => {
        if (error) {
          reject(error);
        } else {
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', id_token);
          resolve(profile);
        }
      });
    })
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  public getProfile() {
    return JSON.parse(localStorage.getItem('profile'));
  }


  public resetPassword(): void {
    let profile = this.getProfile();
    let url: string = `https://${this.domain}/dbconnections/change_password`;
    let headers = new Headers({ 'content-type': 'application/json' });
    let body = {
      client_id: this.clientId,
      email: profile.email,
      connection: 'Username-Password-Authentication'
    }

    this.http.post(url, body, {headers})
      .toPromise()
      .then((res: Response) => {
        console.log(res.json());
      })
      .catch(this.handleError);


  }
  private handleError(error: any): Promise<any> {
    console.error('Error occurred', error);
    return Promise.reject(error.message || error);
  }

}


/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
*/
/*
//version : use cdn in index.html by  <script src="https://cdn.auth0.com/js/lock-9.min.js"></script>
import { Injectable } from '@angular/core';
import {tokenNotExpired} from "angular2-jwt";
import {reject} from "q";

declare var Auth0Lock:any;

@Injectable(/!*{providedIn: 'root'}*!/)
export class AuthService {

  clientId = 'Kpohf0lVYOVRyK2-QjArHjqCq6kSdelz';
  domain = 'bittiger.auth0.com';
  lock = new Auth0Lock(this.clientId, this.domain, {});

  constructor() {
    /!*    this.lock.on("authenticated",(authResult)=>{
          localStorage.setItem('id_token',authResult.idToken);
        });*!/
  }

  public login():Promise<Object> {
    /!*this.lock.show();*!/
    return new Promise((resolve ,reject) =>{
    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        /!*console.log(error);*!/
        reject(error);
      } else {
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', id_token);
        resolve(profile);
       }
      });
   })
  }
  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public getProfile(): Object {
    return JSON.parse(localStorage.getItem('profile'));
  }
}*/

/*
// new version
// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'Kpohf0lVYOVRyK2-QjArHjqCq6kSdelz',
    domain: 'bittiger.auth0.com',
    responseType: 'token id_token',
    audience: 'https://bittiger.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }


  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

}*/
