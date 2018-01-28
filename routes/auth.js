const router = require('express').Router();
const {userRegistry, createTokenFor} = require('../authUtil');

router.route('/login').post(function (req, res) {
  const {username, password} = req.body;
  if (!(username || password)) {
    res.status(400);
    res.json({error: 'Specify username and password'});
  } else if (userRegistry[username] !== password) {
    res.status(401);
    res.json({error: 'Username or password invalid'});
  } else {
    res.status(200);
    const token = createTokenFor(username);
    res.json({token});
  }
});

router.route('/register').post(function (req, res) {
  const {username, password} = req.body;
  if (userRegistry[username]) {
    res.status(400);
    res.json({error: 'User already exists!'});
  }
  if (!(username || password)) {
    res.status(400);
    res.json({error: 'Specify username and password'});
  } else {
    res.status(200);
    userRegistry[username] = password;
    res.json({token: createTokenFor(username)});
  }
});

module.exports = router;
