
const express = require('express'),
    app = express(),
    passport = require('passport'),
    auth = require('./auth');
auth(passport);
app.use(passport.initialize());
app.get('/', (req, res) => {
    res.json({
        status: 'session cookie not set'
    });
});
app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.listen(3200, () => {
    console.log('Server is running on port 32s00');
});