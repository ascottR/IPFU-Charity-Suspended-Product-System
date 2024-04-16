const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const decisionSchema = new Schema({

    m_name : {
        type : String,
        require: true
    },
    manager_id : {
        type : String,
        require: true
    },
    d_title : {
        type : String,
        require:true
    },
    decisions : {
        type : String,
        require:true
    }
})

const decision = mongoose.model("decision",decisionSchema);

module.exports = decision;