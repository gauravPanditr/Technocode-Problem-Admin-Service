const { ProbemService}=require('../service');
const {ProblemRepository}=require('../repositarory');
const {StatusCodes}=require('http-status-codes');
const problemService=new ProbemService(new ProblemRepository());



async function addProblem(req, res, next) {
      try {
          console.log("incoming req body", req.body);
          const newproblem = await problemService.createProblem(req.body);
          console.log(newproblem);
          
          return res.status(StatusCodes.CREATED).json({
              success: true,
              message: 'Successfully created a new problem',
              error: {},
              data: newproblem
          })
      } catch(error) {
          next(error);
      }
}  


async function  deleteProblem(req,res) {
      
}

async function getProblems(req,res,next) {
      try {
            
            const getAllProblem = await problemService.getAllProblems();
            
            
            return res.status(StatusCodes.OK).json({
                success: true,
                message: 'Successfully created a new problem',
                error: {},
                data: getAllProblem
            })
        } catch(error) {
            next(error);
        }
          
}


async function getProblem(req,res) {
      
}

async function  updateProblem(req,res) {
      
}


module.exports={
      addProblem,
      deleteProblem,
      getProblem,
      getProblems,
      updateProblem,
      
}