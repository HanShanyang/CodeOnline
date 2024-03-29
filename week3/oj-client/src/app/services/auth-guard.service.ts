import {Inject, Injectable} from '@angular/core';
import {CanActivate,Router} from "@angular/router";

@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthGuardService implements CanActivate{

  constructor(@Inject('auth') private auth,private router: Router) { }


  canActivate():boolean{
    if(this.auth.authenticated()){
      return true;
    }else{
      //redirect to home page if not logged in
      this.router.navigate(['/problems']);
      return false;
    }
  }
  isAdmin():boolean{
    if(this.auth.authenticated() && this.auth.getProfile().roles.includes('Admin')){
      return true;
    }else {
      return false;
    }
  }
}
