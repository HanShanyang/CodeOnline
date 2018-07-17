var ProblemModel = require("../models/problemModel");

var getProblems = function () {
    return new Promise((resolve,reject) => {
       /* resolve(problems);*/
        ProblemModel.find({},function (err,problems) {
            if (err){
                reject(err);
            } else{
                resolve(problems);
            }
        })
    });
}

var getProblem = function (id) {
    return new Promise((resolve,reject) => {
        /*resolve(problems.find(problem => problem.id === id));*/
        ProblemModel.findOne({id:id},function (err,problem) {
            if (err){
                reject(err);
            } else{
                resolve(problem);
            }
        })
    });
}

var addProblem = function (newProblem) {
    return new Promise((resolve,reject) => {
        /*if( problems.find(problem => problem.name === newProblem.name)){
            reject("Problem already exists!");
        }else{
            newProblem.id =problems.length + 1;
            problems.push(newProblem);
            resolve(newProblem);
        };*/
        ProblemModel.findOne({name:newProblem.name},function (err,problem) {
            if (problem){
                reject("Problem name already exists");
            } else{
                ProblemModel.count({},function (err,num) {
                    newProblem.id = num + 1;
                    var mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save();
                    resolve(newProblem);
                });
                resolve(problem);
            }
        })
    });
}
/*var problems = [
    {
        id: 1 ,
        name:"Two Sum",
        desc:"Given an array of integers.Find two numbers such that they add up to a specific target number.The function twoSum should return indices of the two numbers such that they add up to the target.",
        difficulty:"easy"
    },
    {
        id: 2 ,
        name:"Three Sum",
        desc:"balabalabalabla",
        difficulty:"medium"
    },
    {
        id: 3 ,
        name:"Four Sum",
        desc:"balabalabalabla",
        difficulty:"hard"
    },
    {
        id: 4 ,
        name:"Five Sum",
        desc:"balabalabalabla",
        difficulty:"super"
    }

];*/

module.exports = {
    getProblems:getProblems,getProblem,addProblem
}