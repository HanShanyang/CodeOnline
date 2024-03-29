import {Component, Inject, OnInit} from '@angular/core';
import { Problem } from "../../models/problem.model";
import {PROBLEMS} from "../../mock-problems";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  /*problems:Problem[];*/

  problems:Problem[] = [];
  subscriptionProblems:Subscription;

  constructor(@Inject("data") private data) { }

  ngOnInit() {
    this.getProblems();
  }
  getProblems(): void {
    /*this.problems = this.data.getProblems();*/
    this.subscriptionProblems= this.data.getProblems()
     .subscribe(problems => this.problems = problems);

  }
}


