const sanitizeMarkdownContent = require("../utlis/markedDownSantizier");

class ProbemService{
      
constructor(problemRepositary){
 this.problemRepositary=problemRepositary;
}



 async createProblem(problemData) {
     problemData.description=sanitizeMarkdownContent(problemData.description);
     const problem=this.problemRepositary.createProblem(problemData);
     return problem; 
 }
  async getAllProblems(){
      const problem=this.problemRepositary.getAllProblem();
      return problem;
  }

}
module.exports=ProbemService;