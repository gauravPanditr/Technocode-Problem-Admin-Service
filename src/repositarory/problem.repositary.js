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



}
module.exports=ProblemRepository;