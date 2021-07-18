const express = require('express');
const passport = require('passport');

const router = express.Router();

router.route('/google').get(
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.route('/google/callback').get(passport.authenticate('google'));

router.route('/api/current_user').get((req, res) => {
	if (!req.user) {
		res.redirect('/');
		return;
	}
	res.send(req.user);
});

router.route('/api/logout').get((req, res) => {
	req.logOut();
	res.send(req.user);
});

module.exports = router;
