const express=require('express');

const v1Routes=express.Router();

const ProblemRoues=require('./problem.routes');


v1Routes.use('/problem',ProblemRoues);


module.exports=v1Routes;