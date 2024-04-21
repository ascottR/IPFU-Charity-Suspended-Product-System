const express = require('express');
const router =express.Router();
const controller =require('../controllers/CommunicationContoller');

router.get('/feedbacks',controller.getfeedbacks);
router.post('/createfeedback',controller.addFeedback);
router.post('/updatefeedback',controller.updateFeedback);
router.post('/deletefeedback',controller.deleteFeedback);


router.get('/requests',controller.getrequests);
router.post('/createrequest',controller.addRequest);
router.post('/updaterequest',controller.updateRequest);
router.post('/deleterequest',controller.deleteRequest);

router.get('/replies',controller.getreplys);
router.post('/createreply',controller.addReply);
router.post('/updatereply',controller.updateReply);
router.post('/deletereply',controller.deleteReply);





module.exports = router;



