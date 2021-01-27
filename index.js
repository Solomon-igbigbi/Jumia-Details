const express = require('express');
const app = express();
const routes = require("./routes/routes");
const port = 5000;
// routes
app.use("/", routes)
//listen on a specified port
app.listen(port, () => {
  console.log(`Working On ${port}!`)
})