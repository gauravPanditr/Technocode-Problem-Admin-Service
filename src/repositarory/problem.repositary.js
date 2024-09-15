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
            return getProblem;

      }catch(error){
            console.log(error);
            
      }
   }
   
   async deleteProblemById(id){
      try{
            const deleteProblem=await Problem.findByIdAndDelete(id);
            return deleteProblem;

      }
      catch(error){
            console.log(error);
            
      }
   }




}
module.exports=ProblemRepository;