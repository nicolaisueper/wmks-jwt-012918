const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

router.use('/auth', authRoutes);
router.use('/protected', protectedRoutes);

app.use('/api', router);

app.use(function (req, res, next) {
  res.redirect('/');
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = err;
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
