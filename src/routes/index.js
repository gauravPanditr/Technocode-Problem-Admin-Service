const express=require('express');

const apiRouter=express.Router();

const v1Routes=require('./v1')


apiRouter.use('/v1',v1Routes);


module.exports=apiRouter;