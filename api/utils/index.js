const jwt = require('jsonwebtoken')
const UserModel = require('../models/users.model')


// Authenticate Middleware
function authUser (req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }

      UserModel.findOne({ email: token.email })
        .then(user => {
          res.locals.user = user
          next()
        })
    })
  }
}

function adminCheck (req, res, next) {
  if (res.locals.user.role === 'admin'){
    next()
  } else {
    res.status(401).json('Not authorized')
  }
}

function roleCheck (req, res, next) {
  if (res.locals.user.role === 'admin' || res.locals.user._id.toString() === req.params.id) {
    next()
  } else {
    res.status(403).json('Not Authorized')
  }
}

module.exports = {
  authUser,
  adminCheck,
  roleCheck
}