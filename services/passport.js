const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../config.env` });

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);
		done(null, user);
	} catch (err) {
		console.log('Error occured while deserializing user: ' + err);
		done(err);
	}
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.googleClientID,
			clientSecret: process.env.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				let existingUser = await User.findOne({ googleId: profile.id });

				if (!existingUser) {
					const newUSer = await User.create({
						googleId: profile.id,
						name: profile.displayName,
					});

					console.log('user created successfully');

					existingUser = newUSer;
				}
				console.log(existingUser);
				done(null, existingUser);
			} catch (err) {
				console.log('Error at passport js Google Strategy: ' + err);
				console.log(err);
			}
		}
	)
);
