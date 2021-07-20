const express = require('express');
const passport = require('passport');

const router = express.Router();

router.route('/google').get(
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router
	.route('/google/callback')
	.get(passport.authenticate('google'), (req, res) => {
		res.redirect('/survey');
	});

router.route('/api/current_user').get((req, res) => {
	res.send(req.user);
});

router.route('/api/logout').get((req, res) => {
	req.logOut();
	res.redirect('/');
});

module.exports = router;
