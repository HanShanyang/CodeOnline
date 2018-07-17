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

//version 2
import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
import { PROBLEMS } from "../mock-problems";
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: Http) { }

  getProblems(): Observable<Problem[]> {
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res: Response) => {
        this.problemsSource.next(res.json());
      })
      .catch(this.handleError);

    return this.problemsSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(this.handleError);
  }

  addProblem(problem: Problem): Promise<Problem> {
    let headers = new Headers({ 'content-type': 'application/json' });
    return this.http.post('/api/v1/problems', problem, {headers})
      .toPromise()
      .then((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError);
  }

  // error hanlder
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.body || error);
  }
}


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
