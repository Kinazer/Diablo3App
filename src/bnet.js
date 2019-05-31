var BnetStrategy = require("passport-bnet").Strategy;
var BNET_ID = "5eb3cf7e704e455e8f0733d498fdd1f9";
var BNET_SECRET = "LQ1osGj2ur2JJCY0d2U9qhCgiApyAvTH";

passport.use(
  new BnetStrategy(
    {
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      callbackURL: "https://localhost:3000/auth/bnet/callback",
      region: "us"
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
app.get("/auth/bnet", passport.authenticate("bnet"));

app.get(
  "/auth/bnet/callback",
  passport.authenticate("bnet", { failureRedirect: "/" }),
  function(req, res) {
    res.redirect("/");
  }
);
