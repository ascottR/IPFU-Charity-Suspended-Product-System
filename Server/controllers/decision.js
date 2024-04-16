const router = require("express").Router();
let decision = require("../models/decision");

router.route("/add").post((req,res)=>{

    const m_name = req.body.m_name;
    const manager_id = req.body.manager_id;
    const d_title = req.body.d_title;
    const decisions = req.body.decisions;

    const newdecision = new decision({
        m_name,
        manager_id,
        d_title,
        decisions
    })

    newdecision.save().then(()=>{
        res.json("Decision Added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{

    decision.find().then((decisions)=>{
        res.json(decisions)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res) =>{
    let userId = req.params.id;
    const {m_name, manager_id, d_title, decisions} = req.body;

    const updatedecision = {
        m_name,
        manager_id,
        d_title,
        decisions
    }

    const update = await decision.findByIdAndUpdate(userId, updatedecision)
   .then(()=>{
    res.status(200).send({status: "Decision updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({srarus: "Error with updating data", error: err.message});
})

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await decision.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Decision Deleted "});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({satatus: "Error with delete Decision",error: err.message});
    })
})

router.route("/get:id").get(async(req,res) => {
    let userId = req.params.id;
    await decision.findById(userId)
    .then(() => {
        res.status(200).send({status: "Decition fetched",manager: manager})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get manager", error: err.message});
    })
})

module.exports = router;