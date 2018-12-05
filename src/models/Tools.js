const mongoose = require('mongoose');

//Define Schema
const ToolsSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    tags: { type: [String] },
    createdAt: {
        type: Date,
        default: Date.now
    },    
}, 
{ 
  versionKey: false
});

module.exports = mongoose.model('Tools', ToolsSchema);