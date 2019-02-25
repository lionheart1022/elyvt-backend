var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var User = require('./user.js')

var folderSchema = new Schema({
	user: [
      {type: Schema.Types.ObjectId, ref: 'User'}
    ],
    //foldersdata: Object,
	id: { type: String },
	title: { type: String },
	color: { type: String },
	childIds: Object,
	scope: { type: String },
	project: Object,
	parentId: { type: String }
})
var folder = module.exports = mongoose.model('folder', folderSchema);


module.exports.getfolders = function( callback){
	var query = {};
	folder.find(query, callback);
}

module.exports.getfolderbyId = function(folderid, callback){
	var query = {folderid: folderid};
	folder.findOne(query, callback);
}

module.exports.getfolderbyParentId = function(folderid, callback){
	var query = {parentId: folderid};
	folder.find(query, callback);
}

module.exports.getprojects = function(folderid, callback){
	var query = {scope: 'WsRoot'};
	folder.find(query, callback);
}

module.exports.getrootfolder = function(callback){
	var query = {title: 'Root'};
	folder.findOne(query, callback);
}

module.exports.updateFolder = function(query, newValues, callback){
	var query = query;
	folder.updateOne(query, newValues, callback);
}