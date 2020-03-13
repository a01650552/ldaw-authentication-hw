exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/register')
    //res.status(401).json({ msg: 'You are not authorized to view this resource' });
  }
}

exports.hasAuthorization = (req, res, next) => {
  if (req.user.role == 'admin'){
    next();
  } else {
    res.status(403).json({ msg: 'You are not authorized to view this resource' });
  }
}
