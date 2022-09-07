const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const regimens = require("./routes/api/regimens");
const exercises = require("./routes/api/exercises");
const tweets = require("./routes/api/tweets")
const likes = require("./routes/api/likes")
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const passport = require("passport");

// import for express

const path = require('path');


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("/api/users", users);
app.use("/api/regimens", regimens);
app.use("/api/exercises", exercises);
app.use("/api/tweets", tweets)
app.use("/api/likes", likes);


