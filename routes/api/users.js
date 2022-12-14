const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys')
const jwt = require('jsonwebtoken')
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login')

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get("/", (req, res) => {
  // console.log(user.req)
  User.find()
    .sort({ date: -1 }) // sort newest
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  console.log(req.body)
  User
    .find({ user: req.params._id })
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err))
})

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email })
  .then(user => {
    if (user) { 
      return res.status(400).json({ email: "A user is already registered with that email" }) 
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              const payload = { id: user.id, username: user.username };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            })
            
              // res.json(user))
            .catch(err => console.log(err));
        })
      })
    }    
  })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { 
              id: user.id,
              username: user.username, 
              email: user.email 
            };
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }); 
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})



module.exports = router;