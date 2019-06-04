const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
	username: {
		type: String,
		default:''
	},
	email: {
		type: String,
		default:''
	},
	password: {
		type: String,
		default:''
	},

	isDeleted: {
		type: Boolean,
		default:false
	},
	card: [
		{
		  type: Schema.Types.ObjectId,
		  ref: "Card"
		}
	  ]
=======
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
>>>>>>> origin/master
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
