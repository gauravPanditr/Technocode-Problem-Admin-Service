
const express = require('express');

const problemroutes = express.Router();

const { ProblemController } = require('../../controller');


problemroutes.get('/:id', ProblemController.getProblem);

problemroutes.post('/', ProblemController.pingController);

problemroutes.get('/', ProblemController.getProblems);

problemroutes.put('/:id', ProblemController.updateProblem);

problemroutes.delete('/:id', ProblemController.deleteProblem);





module.exports = problemroutes;