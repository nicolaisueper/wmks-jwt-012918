const router = require('express').Router();
const verifyAndDecode = require('../authUtil').verifyAndDecodeToken;

router.use(function (req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader) next(new Error('You don\'t have access to this!'));

  const result = /Bearer (.*)/.exec(authHeader);
  if (result && result.length > 0) {
    const token = result[1];
    const user = verifyAndDecode(token);
    if (user !== null) {
      req.user = user;
      next();
    }
  } else {
    next(new Error('Invalid or malformed token!'))
  }
});

router.route('/')
  .get(function (req, res) {
    res.status(200);
    res.json('Hooray, you\'re logged in!');
  });

module.exports = router;
