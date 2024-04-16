const Feedback = require('../models/Communication').Feedback;
const Request = require('../models/Communication').Request;
const Reply = require('../models/Communication').Reply;
const mongoose = require('mongoose');


const getfeedbacks = (req,res,next) => {
    
    Feedback.find()
    .then(response =>{
        res.json({response})
    } )
    .catch(error => {
        res.json({error:error})
    })
};

const addFeedback =(req,res,next) =>{
    const feedback = new Feedback({
        Name:req.body.Name,
        email:req.body.email,
        Feedback:req.body.Feedback,
    });
    feedback.save()
    .then(response =>{
        res.json({response})
    } )
    .catch(error => {
        res.json({error:error})
    })
}

const updateFeedback = (req, res, next) => {
    const { Name, email, Feedback } = req.body;

    if (mongoose.models.Feedback) {
        mongoose.models.Feedback.updateOne({ Name: Name }, { $set: { email: email, Feedback: Feedback } })
            .then(response => {
                res.json({ response });
            })
            .catch(error => {
                res.json({ error: error });
            });
    } else {
        res.json({ error: 'Feedback model not found' });
    }
};

const deleteFeedback = (req, res, next) => {
    const { Name } = req.body;
    Feedback.deleteOne({ Name: Name })
        .then(response => {
            res.json({ success: true, message: 'Feedback deleted successfully.' });
        })
        .catch(error => {
            res.status(500).json({ success: false, error: error.message });
        });
}



const getrequests = (req,res,next) => {
    
    Request.find()
    .then(response =>{
        res.json({response})
    } )
    .catch(error => {
        res.json({error:error})
    })
};

const addRequest =(req,res,next) =>{
    const request = new Request({
        Name:req.body.Name,
        email:req.body.email,
        Request:req.body.Request,
    });
    request.save()
    .then(response =>{
        res.json({response})
    } )
    .catch(error => {
        res.json({error:error})
    })
}

const updateRequest = (req, res, next) => {
    const { Name, email, Request } = req.body;

    if (mongoose.models.Request) {
        mongoose.models.Request.updateOne({ Name: Name }, { $set: { email: email, Request: Request } })
            .then(response => {
                res.json({ response });
            })
            .catch(error => {
                res.json({ error: error });
            });
    } else {
        res.json({ error: 'Request model not found' });
    }
};


const deleteRequest = (req, res, next) => {
    const { Name } = req.body;
    Request.deleteOne({ Name: Name })
        .then(response => {
            res.json({ success: true, message: 'Request deleted successfully.' });
        })
        .catch(error => {
            res.status(500).json({ success: false, error: error.message });
        });
}


//replys

const getreplys = (req,res,next) => {
    
    Reply.find()
    .then(response =>{
        res.json({response})
    } )
    .catch(error => {
        res.json({error:error})
    })
};

const addReply =(req,res,next) =>{
    const reply = new Reply({
        Name:req.body.Name,
        email:req.body.email,
        Request:req.body.Request,
        Reply:req.body.Reply,
    });
    reply.save()
    .then(response =>{
        res.json({response})
    } )
    .catch(error => {
        res.json({error:error})
    })
}

const updateReply = (req, res, next) => {
    const { Name, email, Request, Reply } = req.body;

    if (mongoose.models.Reply) {
        mongoose.models.Reply.updateOne({ Name: Name, email: email, Request: Request }, { $set: { Reply: Reply } })
            .then(response => {
                res.json({ response });
            })
            .catch(error => {
                res.json({ error: error });
            });
    } else {
        res.json({ error: 'Reply model not found' });
    }
}



const deleteReply = (req, res, next) => {
    const { Name } = req.body;
    Reply.deleteOne({ Name: Name })
        .then(response => {
            res.json({ success: true, message: 'Reply deleted successfully.' });
        })
        .catch(error => {
            res.status(500).json({ success: false, error: error.message });
        });
}


exports.getfeedbacks = getfeedbacks;
exports.addFeedback = addFeedback;
exports.updateFeedback = updateFeedback;
exports.deleteFeedback = deleteFeedback;

exports.getrequests = getrequests;
exports.addRequest = addRequest;
exports.updateRequest = updateRequest;
exports.deleteRequest = deleteRequest;

exports.getreplys = getreplys;
exports.addReply = addReply;
exports.updateReply = updateReply;
exports.deleteReply = deleteReply;