// const  NOTFOUND  = require('../errors/NotFoundError');
const logger = require('../config/loggerConfig');
const {Problem}=require('../model')

class ProblemRepository{

      async createProblem(problemData) {
            try {
                const problem=await Problem.create({
                  title:problemData.title,
                  description:problemData.description,
                  
                });

                return problem;
                  
            } catch (error) {
                  console.log(error);
                  
            }
      }
  async getAllProblem(){
      try {
           const getallProblem=await Problem.find();
            return getallProblem; 
      } catch (error) {
            console.log(error);
            
      }
  }

   async getProblemById(id){
      try{
            const getProblem=await Problem.findById(id);
            if(!getProblem){

                  logger.error('Problem with  id '+id+' not found in db');
                        throw new  NOTFOUND('Problem with id '+id+' not found in db');

            //     throw new NOTFOUND("problem",id);

                  
                  
            }

            return getProblem;

      }catch(error){
            console.log(error);
            
      }
   }
   
   async deleteProblemById(id){
      try{
            const deleteProblem=await Problem.findByIdAndDelete(id);
            if(!deleteProblem){

                  logger.error('Problem with  id '+id+' not found in db');
                        throw new  NOTFOUND('Problem with id '+id+' not found in db');

            //     throw new NOTFOUND("problem",id);

                  
                  
            }

            return deleteProblem;


      }
      catch(error){
            console.log(error);
            
      }
   }




}
module.exports=ProblemRepository;