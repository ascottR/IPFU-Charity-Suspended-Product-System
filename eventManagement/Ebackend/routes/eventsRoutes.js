const router = require("express").Router();
let Event = require("../models/Event");

/*create*/
router.route("/add").post((req,res)=> {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const date = req.body.date;
    const location = req.body.location;

     const newEvent = new Event({
        name,
        image,
        description,
        date,
        location
            
        })
 //js promise
      newEvent.save().then(()=>{
      req.json("Event added")
       }).catch((err)=>{
         console.log(err);
     })
})



/*read*/
router.route("/").get((req,res)=>{
    Event.find().then((events)=>{
        res.json(events)
             }).catch((err)=>{
                 console.log(err)
                    })
        })

/*update*/
 router.route("/update/:id").put(async(req,res)=>{
    let eventId = req.params.id;
    const {name,image,description, date,location} = req.body;

        const updateEvent = {
            name,
            image,
            description,
            date,
            location
                }
        const update = await Event.findByIdAndUpdate(eventId, updateEvent).then(()=>{
        res.status(200).send({status:"Event Updated"})
           }).catch((err)=>{
                console.log(err);
   //error for frontend
         res.status(500).send({status:"error with updating",error:err.message});
         })
                })



/*delete*/
router.route("/delete/:id").delete(async (req, res) => {
    let eventId = req.params.id;
    await Event.findByIdAndDelete(eventId)
      .then((event) => {
        res.status(200).send({ status: "Event deleted" }); 
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with deleting", error: err.message });
      });
  });
  

/*fetch one event details*/
router.route("/get/:id").get(async(req,res)=>{
    let eventId = req.params.id;
    const event = await Event.findById(eventId)
    .then((event)=>{
        res.status(200).send({status:"event fetch",event});
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"error with get event",error:err.message});
    })
})


module.exports= router;



