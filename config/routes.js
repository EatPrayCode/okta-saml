
module.exports = function (app, config, passport) {

  app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('home',
        {
          user: req.user
        });
    } else {
      res.render('home',
        {
          user: null
        });
    }
  });

  app.post('/login/callback',
    passport.authenticate(config.passport.strategy,
      {
        failureRedirect: '/',
        failureFlash: true
      }),
    function (req, res) {
      console.log(req);
      res.redirect('/');
    }
  );

  app.get('/login',
    passport.authenticate(config.passport.strategy,
      {
        successRedirect: '/',
        failureRedirect: '/login'
      })
  );

  //   app.post('/login/callback', auth.authenticate('saml', { failureRedirect: '/', failureFlash: true }), function(req, res) {
  //     res.redirect('/home');
  // });

  app.get('/signup', function (req, res) {
    res.render('signup');
  });

  app.get('/profile', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('profile',
        {
          user: req.user
        });
    } else {
      res.redirect('/login');
    }
  });

  app.get('/logout', function (req, res) {
    req.logout();
    // TODO: invalidate session on IP
    res.redirect('/');
  });

};
