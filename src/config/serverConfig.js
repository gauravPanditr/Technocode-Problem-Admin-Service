const dotenv=require('dotenv');

dotenv.config();

module.exports={
 PORT:process.env.PORT,
   NODE_ENV:process.env.NODE_ENV,
   ATLAS_DB_URL:process.env.ATLAS_DB_URL,

}
