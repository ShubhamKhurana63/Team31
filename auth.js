const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "1007191408942-nke9mb9d3om4d70kt1ifuh4kcpt6qtvk.apps.googleusercontent.com",
            clientSecret: "wFok0sKW4I60qfXGRooxOYPB",
            callbackURL: "http://localhost:3100/login/callback"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};