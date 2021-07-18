const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: `${__dirname}/../config.env`})


module.exports = async () => {
	try {
		await mongoose.connect(process.env.mongooseURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});

		console.log('DATABASE CONNECTED SUCCESSFULLY');
	} catch (err) {
		console.log('Error Occcured During Connection Of DB: ' + err);
	}
};
