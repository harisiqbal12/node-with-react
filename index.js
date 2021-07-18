const express = require('express');
const connectMongoDB = require('./services/connectDatabse');
const cookieSession = require('cookie-session');
const passport = require('passport');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
require('./models/User');
require('./services/passport');

dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

connectMongoDB();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days period
		keys: [process.env.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
	res.send('Homepage');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('Listening to Port: ' + PORT);
});
