
const express = require('express');

const problemroutes = express.Router();

const { ProblemController } = require('../../controller');


problemroutes.get('/:id', ProblemController.getProblemById);

problemroutes.post('/', ProblemController.addProblem);

problemroutes.get('/', ProblemController.getProblems);

//problemroutes.put('/:id', ProblemController.updateProblem);

problemroutes.delete('/:id', ProblemController.deleteProblemById);





module.exports = problemroutes;