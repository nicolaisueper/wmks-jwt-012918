const jwt = require('jsonwebtoken');

const userRegistry = {
  "admin": "pass"
};

const jwtOptions = {
  expirationTime: process.env.JWT_EXP || '48h',
  secret: 'changeme'
};

function createTokenFor(username) {
  return jwt.sign({
    username,
    admin: username === 'admin'
  }, jwtOptions.secret, {expiresIn: jwtOptions.expirationTime, algorithm: 'HS256'});
}

function verifyAndDecodeToken(token) {
  try {
    return jwt.verify(token, jwtOptions.secret);
  } catch (err) {
    return null;
  }
}

module.exports = {
  userRegistry,
  jwtOptions,
  verifyAndDecodeToken,
  createTokenFor
};
