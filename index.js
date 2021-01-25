const express = require('express');
const app = express();
const routes = require("./routes/routes");
const path = require("path");
const bodyParser = require("body-parser");

const port = 5000;

app.set("views", path.join(__dirname, "views")); // this is the folder where we keep our pug files
app.set("view engine", "ejs"); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use("/", routes)




app.listen(port, () => {
  console.log(`Working On ${port}!`)
})