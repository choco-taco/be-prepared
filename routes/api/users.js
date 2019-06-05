const express = require('express');
const router = express.Router();
const app = express();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// const flash = require('connect-flash');
// const session = require('express-session');


// Load User model
const User = require('../../models/User');
const { forwardAuthenticated } = require('../../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.json('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.json('register'));

// Register
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  let errors = [];

  if (!username || !email || !password) {
    errors.push({ msg: 'Please enter all fields' });
  }


  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });

    return res.send({
      message: 'Error: Passswords must be at least 6 characters'
    })
  }

  if (errors.length > 0) {
    req.login(user, function (err) {
      if (err) { return next(err); }
      return res.redirect('/home' + req.user.username);
    });
    console.log('signed up')
    res.json('register', {
      errors,
      username,
      email,
      password
    });
  } else {
    console.log('signup failed')
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.status(400).json({
          errors,
          username,
          email,
          password
        });
      } else {
        const newUser = new User({
          username,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/user/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
// app.post('/login',
//   passport.authenticate('local', {
//     failureRedirect: '/login'
//   }, console.log('login failed')),
//   function (req, res) {
//     console.log('login successful')
//     res.redirect('/home');
//   });

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy(function (err) {
    if (err) throw err;
  })
  req.flash('success_msg', 'You are logged out');
  res.redirect('/LogIn');
});

module.exports = router;
