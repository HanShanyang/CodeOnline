/*
import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "COJ";
  username="";

  constructor(@Inject('auth') private auth) { }

  ngOnInit() {
    if(this.auth.authenticated()){
      /!*this.username = this.auth.getProfile.nickname;*!/
      this.username = this.auth.getProfile.nonce;
    }
  }


  login():void {
    this.auth.login();
    /!*this.username = this.auth.getProfile().nickname;*!/
    this.username = this.auth.getProfile.nonce;
  }
  logout():void{
    this.auth.logout();

  }
}
*/
import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "COJ";
  username="";

  constructor(@Inject('auth') private auth) { }

  ngOnInit() {
    if(this.auth.authenticated()){
      this.username = this.auth.getProfile().nickname;
    }
  }


  login():void {
    this.auth.login()
             .then(profile => this.username = profile.nickname);


    /*this.username = this.auth.getProfile().nickname;*/
 /*   console.log(this.auth.getProfile());
    this.username = this.auth.getProfile().nickname;*/
  }
  logout():void{
    this.auth.logout();

  }
}
