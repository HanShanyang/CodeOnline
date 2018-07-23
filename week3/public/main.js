(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_6__["ProblemListComponent"],
                _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProblemDetailComponent"],
                _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_11__["NewProblemComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_10__["routing"]
            ],
            providers: [{
                    provide: "data",
                    useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
                }, {
                    provide: "auth",
                    useClass: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
                }, {
                    provide: "authGuard",
                    useClass: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");





var routes = [
    {
        path: "",
        redirectTo: "problems",
        pathMatch: "full"
    },
    {
        path: "problems",
        component: _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__["ProblemListComponent"]
    },
    {
        path: "problems/:id",
        component: _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProblemDetailComponent"]
    },
    {
        path: "profile",
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: "**",
        redirectTo: "problems",
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n      <ul class=\"navbar-nav mr-auto\">\n\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search Problem\" aria-label=\"Search\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\" >\n        <li class=\"nav-item dropdown\" *ngIf=\"auth.authenticated()\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{username}}\n          </a>\n\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/profile\">My Profile</a>\n            <a class=\"dropdown-item\" href=\"#\">My Favorites</a>\n            <a class=\"dropdown-item\" href=\"#\">My Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\">Log Out</a>\n          </div>\n        </li>\n\n        <li>\n          <form class=\"navbar-form\">\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!auth.authenticated()\" (click)=\"login()\">Sign in</button>\n          </form>\n        </li>\n\n      </ul>\n\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.title = "COJ";
        this.username = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated()) {
            this.username = this.auth.getProfile().nickname;
        }
    };
    NavbarComponent.prototype.login = function () {
        var _this = this;
        this.auth.login()
            .then(function (profile) { return _this.username = profile.nickname; });
        /*this.username = this.auth.getProfile().nickname;*/
        /*   console.log(this.auth.getProfile());
           this.username = this.auth.getProfile().nickname;*/
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authGuard.isAdmin()\">\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemName\" name=\"problemName\"\n             required placeholder=\"Enter Problem Name\" [(ngModel)]=\"newProblem.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Description</label>\n      <textarea type=\"text\" row=\"3\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\"\n             required placeholder=\"Enter Problem Description\" [(ngModel)]=\"newProblem.desc\">\n      </textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for= \"difficulty\">Difficulty</label>\n      <select type=\"text\" class=\"form-control\" id=\"difficulty\"\n              name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\">\n        <option value=\"\" disabled selected>Select difficulty</option>\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n          {{difficulty}}\n        </option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary float-right\" (click)=\"addProblem()\">\n          Add Problem\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEMS = Object.freeze({
    id: 0,
    name: "",
    desc: "",
    difficulty: ""
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(data, authGuard) {
        this.data = data;
        this.authGuard = authGuard;
        this.difficulties = ["Easy", "Medium", "Hard", "Super"];
        this.newProblem = Object.assign({}, DEFAULT_PROBLEMS);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        /*this.data.addProblem(this.newProblem);
        this.newProblem = Object.assign({},DEFAULT_PROBLEMS);*/
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error._body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEMS);
    };
    NewProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/components/new-problem/new-problem.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("authGuard")),
        __metadata("design:paramtypes", [Object, Object])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"col-xs-12 col-md-4\">\n    <div>\n      <h2>\n        {{problem.id}}{{problem.name}}\n      </h2>\n      <p>\n        {{problem.desc}}\n      </p>\n      <br/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProblemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailComponent", function() { return ProblemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            /*this.problem = this.data.getProblem(+params["id"]);*/
            _this.data.getProblem(+params["id"])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-detail',
            template: __webpack_require__(/*! ./problem-detail.component.html */ "./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail.component.css */ "./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".difficulty{\n  min-width: 60px;\n  margin-right: 10px;\n}\n.label.difficulty{\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n.title{\n  font-size: 1.2em;\n}\n.diff-easy{\n  background-color: #42ebf4;\n}\n.diff-medium{\n  background-color: #92cf5c;\n}\n.diff-hard{\n  background-color: #dd0d1e;\n}\n.diff-super{\n  background-color: #8d16e2;\n}\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-new-problem></app-new-problem>\n  <app-messages></app-messages>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems\"\n       [routerLink]=\"['/problems',problem.id]\">\n      <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">{{problem.difficulty}}</span>\n      <strong class=\"title\">{{problem.id}}.{{problem.name}}</strong>\n    </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(data) {
        this.data = data;
        /*problems:Problem[];*/
        this.problems = [];
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        /*this.problems = this.data.getProblems();*/
        this.subscriptionProblems = this.data.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list.component.html */ "./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__(/*! ./problem-list.component.css */ "./src/app/components/problem-list/problem-list.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [Object])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-pills\">\n    <li class =active><a data-toggle=\"pill\" href=\"#profile\">Personal Information</a></li>\n    <li><a data-toggle=\"pill\" href=\"#password\">Change Password</a></li>\n  </ul>\n\n  <hr>\n\n  <div class=\"tab-content\">\n    <div id=\"profile\" class=\"tab-pane fade in active\">\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\"\n               name=\"email\" disabled value=\"{{email}}\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"username\">User name</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\"\n               name=\"username\" disabled value=\"{{username}}\">\n      </div>\n\n      <div id=\"password\" class=\"tab-pane fade\">\n        <form class=\"navbar-form\">\n          <button class=\"btn btn-large btn-success \" type=\"button\"\n                  (click)=\"resetPassword()\" >Reset password via email\n          </button>\n        </form>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.email = '';
        this.username = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var profile = this.auth.getProfile();
        this.email = profile.email;
        this.username = profile.nickname;
    };
    ProfileComponent.prototype.resetPassword = function () {
        this.auth.restPassword();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.authenticated()) {
            return true;
        }
        else {
            //redirect to home page if not logged in
            this.router.navigate(['/problems']);
            return false;
        }
    };
    AuthGuardService.prototype.isAdmin = function () {
        if (this.auth.authenticated() && this.auth.getProfile().roles.includes('Admin')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
// app/auth.service.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // Configure Auth0
        this.clientId = 'Kpohf0lVYOVRyK2-QjArHjqCq6kSdelz';
        this.domain = 'bittiger.auth0.com';
        this.lock = new Auth0Lock(this.clientId, this.domain, {});
        /*  this.lock.on("authenticated",(authResult) => {
            localStorage.setItem('id_token',authResult.idToken);
          })*/
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Call the show method to display the widget.
            _this.lock.show(function (error, profile, id_token) {
                if (error) {
                    reject(error);
                }
                else {
                    localStorage.setItem('profile', JSON.stringify(profile));
                    localStorage.setItem('id_token', id_token);
                    resolve(profile);
                }
            });
        });
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    };
    AuthService.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('profile'));
    };
    AuthService.prototype.resetPassword = function () {
        var profile = this.getProfile();
        var url = "https://" + this.domain + "/dbconnections/change_password";
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'content-type': 'application/json' });
        var body = {
            client_id: this.clientId,
            email: profile.email,
            connection: 'Username-Password-Authentication'
        };
        this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) {
            console.log(res.json());
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());

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


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/*
//version 1
import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
import { PROBLEMS } from "../mock-problems";
import {Http ,Response,Headers} from '@angular/http';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import {_catch} from "rxjs-compat/operator/catch";

@Injectable()
export class DataService {

  /!*problems:Problem[] =PROBLEMS;*!/

  private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http:Http) { }

  getProblems():/!*Problem[]*!/Observable<Problem[]> {
    /!*return this.problems;*!/
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res:Response)=>{
        this.problemsSource.next(res.json());
      })
      .catch(this.handleError);
    return this.problemsSource.asObservable();
  }
  getProblem(id:number):/!*Problem*!/ Promise<Problem>{
    /!*return this.problems.find((problem)=>problem.id === id);*!/
    return this.http.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res:Response) => res.json())
      .catch(this.handleError);

  }

  addProblem(problem:Problem):/!*void*!/Promise<Problem> {
    /!*    problem.id = this.problems.length + 1;
        this.problems.push(problem);*!/
    let headers = new Headers({'content-type':'application/json'});
    return this.http.post('/api/v1/problems',problem,headers)
      .toPromise()
      .then((res:Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError);
  }
  //error handler
  private handleError(error:any): Promise<any>{
    console.error('An error occurred',error);
    return Promise.reject(error.body || error);
  }
}*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//version 2




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.problemsSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get("api/v1/problems")
            .toPromise()
            .then(function (res) {
            _this.problemsSource.next(res.json());
        })
            .catch(this.handleError);
        return this.problemsSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'content-type': 'application/json' });
        return this.http.post('/api/v1/problems', problem, { headers: headers })
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res.json();
        })
            .catch(this.handleError);
    };
    // error hanlder
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());

/*
//version 3
import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
import { PROBLEMS } from "../mock-problems";
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class DataService {

  private problemsUrl = 'api/v1/problems';  // URL to web api

  private problemsSource = new BehaviorSubject<Problem[]>([]);

  /!*constructor(private http: Http) { }*!/
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /!** Log a dataService message with the MessageService *!/
  private log(message: string) {
    this.messageService.add(`DataService: ${message}`);
  }

  /!** GET heroes from the server *!/
  getProblems (): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.problemsUrl)
      .pipe(
        tap(heroes => this.log('fetched problems')),
        catchError(this.handleError('getProblems', []))
      );
  }

/!*  /!** GET problems from the server *!/
  getProblems (): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.problemsUrl)
      .pipe(
        catchError(this.handleError('getProblems', []))
      );
  }*!/

/!*  getProblems(): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.problemUrl)
  }*!/
 /!* getProblems(): Observable<Problem[]> {
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res: Response) => {
        this.problemsSource.next(res.json());
      })
      .catch(this.handleError);

    return this.problemsSource.asObservable();
  }*!/

  /!** GET hero by id. Will 404 if id not found *!/
  getProblem(id: number): Observable<Problem> {
    const url = `${this.problemsUrl}/${id}`;
    return this.http.get<Problem>(url).pipe(
      tap(_ => this.log(`fetched problem id=${id}`)),
      catchError(this.handleError<Problem>(`getProblem id=${id}`))
    );
  }
/!*  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(this.handleError);
  }*!/

  /!** POST: add a new hero to the server *!/
  addProblem (problem: Problem): Observable<Problem> {
    return this.http.post<Problem>(this.problemsUrl, problem, httpOptions).pipe(
      tap((problem: Problem) => this.log(`added problem w/ id=${problem.id}`)),
      catchError(this.handleError<Problem>('addProblem'))
    );
  }
/!*  addProblem(problem: Problem): Promise<Problem> {
    let headers = new Headers({'content-type':'application/json'});
    return this.http.post('/api/v1/problems',problem,headers)
      .toPromise()
      .then((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError);
  }*!/


  /!**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   *!/
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
/!*  // error hanlder
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.body || error);
  }*!/
}
*/
/*
//version:4
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Problem } from "../models/problem.model";
import {MessageService} from "./message.service";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class DataService {

  private problemsUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /!** GET heroes from the server *!/
  getProblems (): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.problemsUrl)
      .pipe(
        tap(problems => this.log('fetched problems')),
        catchError(this.handleError('getProblems', []))
      );
  }



  //////// Save methods //////////

  /!** POST: add a new hero to the server *!/
  addProblem (problem: Problem): Observable<Problem> {
    return this.http.post<Problem>(this.problemsUrl, problem, httpOptions).pipe(
      tap((problem: Problem) => this.log(`added problem w/ id=${problem.id}`)),
      catchError(this.handleError<Problem>('addProblem'))
    );
  }


  /!**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   *!/
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /!** Log a HeroService message with the MessageService *!/
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}*/


/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/han/Projects/BittigerCS503/week3/oj-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map