const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const cardSchema = new Schema({
	plans: [{
		plan:{
			type: ['fire', 'earthquake', 'tornado',],
			'default' : [1,2,3]

		}
	}],
   
      contact: [
		{
		  type: Schema.Types.ObjectId,
		  ref: "Contact"
		}
	  ]
 
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
