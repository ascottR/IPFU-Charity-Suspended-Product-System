const express = require('express');
const router =express.Router();
const controller =require('../controllers/CommunicationContoller');
const nodemailer = require('nodemailer');


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

router.post('/api/createreply', (req, res) => {
    const { Name, email, Request, Reply } = req.body;

    // Logic to store the reply in your database
    // Example: saveReplyToDatabase(Name, email, Request, Reply);

    // Sending email notification
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ranthiliniprarthana0@gmail.com',
            pass: 'rana123456789'
        }
    });

    const mailOptions = {
        from: 'ranthiliniprarthana0@gmail.com',
        to: email,
        subject: 'Reply to Your Request',
        text: `Dear ${Name},\n\nThank you for your request. Here is your reply:\n\n${Reply}\n\nRegards,\nYour Company`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Email Error:', error);
            res.status(500).send('Failed to send email.');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});



module.exports = router;



