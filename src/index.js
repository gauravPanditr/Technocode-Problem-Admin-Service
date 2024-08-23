const express = require("express");
const app = express();
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes=require('./routes');
const BaseError = require("./errors/BaseError");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());
app.use('/api',apiRoutes);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
  
  throw new BaseError("Some error",404,"Something went wrong");

});
