var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var User = require('./user.js')

var tasksSchema = new Schema({
	user: [
      {type: Schema.Types.ObjectId, ref: 'User'}
    ],
    //taskdata: Object,
    id: {type: String},
    accountId: {type: String},
    title: {type: String},
    description: {type: String},
    briefDescription: {type: String},
    parentIds: Object,
    superParentIds: Object,
    sharedIds: Object,
    responsibleIds: Object,
    status: {type: String},
    importance: {type: String},
    createdDate: {type: String},
    updatedDate: {type: String},
    dates: Object,
    scope: {type: String},
    authorIds: Object,
    customStatusId: {type: String},
    hasAttachments: {type: String},
    attachmentCount: {type: String},
    permalink: {type: String},
    priority: {type: String},
    superTaskIds: Object,
    subTaskIds: Object,
    dependencyIds: Object,
    metadata: Object,
    customFields: Object,
})
var tasks = module.exports = mongoose.model('tasks', tasksSchema);

module.exports.getalltasks = function(callback){
	var query = {};
	tasks.find(query, callback);
}

// module.exports.getalltasks = function(callback){
// 	var query = {};
// 	tasks.findOne(query, callback);
// }

// module.exports.getfolderbyId = function(folderid, callback){
// 	var query = {folderid: folderid};
// 	folder.find(query, callback);
// }