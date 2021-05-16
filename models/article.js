const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	seo_title: {
		type: String,
		required: false		
	},
	description: {
		type: String,
		required: false
	},
	img_url: {
		type: String,
		required: false
	},
	markdown: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: false
	},
	date: {
		type: String,
		default: Date.now
	},
	a_id: {
		type: String,
		required: true,
		unique: true
	}
})

module.exports = mongoose.model('Article',articleSchema);