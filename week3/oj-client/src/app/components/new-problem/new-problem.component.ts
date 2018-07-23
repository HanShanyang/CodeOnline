import {Component, Inject, OnInit} from '@angular/core';
import {Problem} from "../../models/problem.model";


const DEFAULT_PROBLEMS:Problem = Object.freeze({
  id:0,
  name:"",
  desc:"",
  difficulty:""

});
@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {

  public difficulties = ["Easy","Medium","Hard","Super"];

  newProblem : Problem = Object.assign({},DEFAULT_PROBLEMS);


  constructor(@Inject("data")private data,
              @Inject("authGuard")private authGuard) { }

  ngOnInit() {
  }

  addProblem():void {
    /*this.data.addProblem(this.newProblem);
    this.newProblem = Object.assign({},DEFAULT_PROBLEMS);*/
    this.data.addProblem(this.newProblem)
      .catch(error => console.log(error._body));
    this.newProblem = Object.assign({}, DEFAULT_PROBLEMS);

  }
}
