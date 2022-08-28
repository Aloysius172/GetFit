const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const regimens = require("./routes/api/regimens");
const bodyParser = require('body-parser');
// const User = require('./models/User');
const keys = require('./config/keys')


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // const user = new User({
  //   username:"Freddy",
  //   email: "fredon@gmail.com",
  //   password: "123456"

  // }) 
  // user.save()
  res.send("Getfit");
})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("/api/users", users);
app.use("/api/regimens", regimens);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());