var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var User = require('./user.js')

var question_answerSchema = new Schema({
	user: [
		{type: Schema.Types.ObjectId, ref:'User'}
	],
	// folder: [
	// {type: Schema.Types.ObjectId, ref='folder'}
	// ],
	folderid: {type: String},
	question: {type: String},
	answer: {type: String}
})

var question_answer = module.exports = mongoose.model('question_answer', question_answerSchema);

module.exports.getQuestionAnswers = function(folderId,  callback){
	var query = {'folderid': folderId};
	question_answer.find(query, callback);
}
