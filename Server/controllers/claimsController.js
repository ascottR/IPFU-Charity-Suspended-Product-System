const Claim = require("../models/claim");

//function to get all claim
async function getAllClaims(req, resp) {
    let claims = await Claim.find({});
    console.log(claims);
    resp.json(
        claims
    )
}

//function to create a claim
async function createClaim(req, resp) {
    const product = "Pomegranate juice";
    const date = new Date();
    const name = req.body.name;
    const phone = req.body.phone;
    
    if(!product || !date || !name || !phone){

        console.log(product,date,name,phone);

        resp.json({
            message: "all properties are required"
        });
        resp.status(400);
        return;
    }

    console.log("started saving the new claim");

    await Claim.create({
        product: product, 
        date: date,
        name: name,
        phoneNo: phone
    })
    
    console.log("sending the response");

    resp.status(200).json({message:"successfully created"});
    
}

//function to update a claim
async function updateClaim(req, resp) {
    const id = req.params.id;
    const product = req.body.product;
    const date = req.body.date;
    const name = req.body.name;
    const phone = req.body.phoneNo;

    if(!id || !product || !date || !name || !phone){
        console.log(product,date,name,phone);

        resp.json({
            message: "all properties are required"
        });
        resp.status(400);
        return;
    }

    await Claim.findByIdAndUpdate(id, req.body);
    console.log("successfully updated");
    const updatedmodel =await  Claim.findById(id);

    resp.json(updatedmodel);
}

//function to delete a claim
async function deleteClaim(req, resp) {
    const id = req.params.id;

    console.log(id);

    if(!id ){
        console.log(id);

        resp.json({
            message: "all properties required"
        });
        resp.status(400).send();
        return;
    }
    console.log(id);

    await Claim.findByIdAndDelete(id);
    console.log("successfully deleted");
    
    resp.status(202).send();
}


//function to get available calims count
async function getClaimsCount(req, resp){

    let suspends = 50;

    const claims = await Claim.find({});

    let available = suspends - claims.length;

    resp.json({
        count:available
    });
}



module.exports = { 
    getAllClaims: getAllClaims,
    createClaim: createClaim,
    updateClaim,
    deleteClaim,
    getClaimsCount
}