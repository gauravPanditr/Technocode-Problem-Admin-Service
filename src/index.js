const express = require("express");
const app = express();
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes=require('./routes');

app.use(bodyParser.json());
const connectToDB = require('./config/dbConfig');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());
app.use('/api',apiRoutes);



app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
    connectToDB();
 // throw new BaseError("Some error",404,"Something went wrong");

});
