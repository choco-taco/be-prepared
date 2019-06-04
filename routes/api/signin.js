// const User = require('../../models/user');
// const UserSession = require('../../models/userSession');


// module.exports = (app) => {
// 	/*
// 	*Sign up
// 	*/

// 	app.post("/account/signup", (req, res, next) => {
// 		const { body } = req;
// 		const {
// 			username,
// 			password
// 		} = body;

// 		let {
// 			email
// 		} = body;

// 		if (!username) {
// 			return res.send({
// 				success: false,
// 				message: 'Error: Username cannot be blank'
// 			})
// 		}
// 		if (!email) {
// 			return res.send({
// 				success: false,
// 				message: 'Error: Email cannot be blank'
// 			})
// 		}
// 		if (!password) {
// 			return res.send({
// 				success: false,
// 				message: 'Error: Password cannot be blank'
// 			})
// 		}

// 		email = email.toLowerCase();

// 		// Steps
// 		//1. verify email doesn't exist already
// 		//2. save

// 		User.find({
// 			email: email
// 		}, (err, previousUsers) => {
// 			if (err) {
// 				return res.send({
// 					success: false,
// 					message: 'Error server error'
// 				})
// 			} else if (previousUsers.length > 0) {
// 				return res.send({
// 					success: false,
// 					message: 'Error: Account already exits.'
// 				})
// 			} 

// 			//Save the new User
// 			const newUser = new User();

// 			newUser.email = email;
// 			newUser.username = username;
// 			newUser.password = newUser.generateHash(password)
// 			newUser.save((err, user) => {
// 				if (err) {
// 					return res.send({
// 						success: false,
// 						message: 'Error server error'
// 					})
// 				}
// 				return res.send({
// 					success: true,
// 					message: 'Signed Up'
// 				})
// 			})
// 		});
// 	});

// 	app.post("/account/signin", (req, res, next) => {
// 		const { body } = req;
// 		const {
// 			password
// 		} = body;

// 		let {
// 			email
// 		} = body;

// 		if (!email) {
// 			return res.send({
// 				success: false,
// 				message: 'Error: Email cannot be blank'
// 			})
// 		}
// 		if (!password) {
// 			return res.send({
// 				success: false,
// 				message: 'Error: Password cannot be blank'
// 			})
// 		}

// 		email = email.toLowerCase();

// 		User.find({
// 			email: email
// 		}, (err, users) => {
// 			if (err) {
// 				return res.send({
// 					success: false,
// 					message: "Error: Server Error"
// 				});
// 			}
// 			if (users.length != 1) {
// 				return res.send({
// 					success: false,
// 					message: "Error: Invalid"
// 				});
// 			}

// 			const user = users[0];
// 			if (!user.validPassword(password)) {
// 				return res.send({
// 					success: false,
// 					message: "Error: Invalid"
// 				});
// 			}

// 			//Otherwise correct user
// 			const userSession = new UserSession();
// 			userSession.userId = user._id;
// 			userSession.save((err, doc) => {
// 				if (err) {
// 					return res.send({
// 						success: false,
// 						message: "Error: Server Error"
// 					});
// 				}

// 				return res.send({
// 					success: true,
// 					message: 'valid signin',
// 					token: doc._id
// 				})
// 			});

// 		});
// 	});

// 	app.get('/account/verify', (req, res, next) => {
// 		//Get the Token
// 		const { query } = req;
// 		const { token } = query;
// 		// ?token=test

// 		//verify that the token is one of a kinda and it is not deleted

// 		UserSession.find({
// 			_id: token,
// 			isDeleted: false,
// 		}, (err, sessions) => {
// 			if (err) {
// 				return res.send({
// 					success: false,
// 					message: 'Error: Server Error'
// 				});
// 			}
// 			if (sessions.length != 1) {
// 				return res.send({
// 					success: false,
// 					message: 'Error: Invalid'
// 				});
// 			} else {
// 				return res.send({
// 					success: true,
// 					message: 'Good'
// 				});
// 			}
// 		});
// 	});

// 	app.get('/account/logout', (req, res, next) => {
// 		//Get the Token
// 		const { query } = req;
// 		const { token } = query;
// 		// ?token=test

// 		//verify that the token is one of a kinda and it is not deleted

// 		UserSession.findOneAndUpdate({
// 			_id: token,
// 			isDeleted: false,
// 		}, {
// 				$set: { isDeleted: true }

// 			}, null, (err, sessions) => {

// 				if (err) {
// 					return res.send({
// 						success: false,
// 						message: 'Error: Server Error'
// 					});
// 				}

// 				return res.send({
// 					success: true,
// 					message: 'Good'
// 				});
// 			});
// 	});
// };