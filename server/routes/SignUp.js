const express = require('express');
const app = express();
const AdopterProfiles = require('../database/models/adopter_profiles');
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


//GET data from adopter_profiles table
router
    .route('/')
    .get((req, res) => {
        AdopterProfiles.where(req.query)
        .fetchAll()
        .then(adopters => {
            res.status(200).json(adopters);
        })
    });

//POST new user to adopter_profiles table
router
    .route('/')
    .post((req, res) => {
        new AdopterProfiles({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            animal: req.body.animal,
            age: req.body.age,
            size: req.body.size            
        })
        .save()
        .then(newAdopter => {
            res.status(200).json({ newAdopter });
        })
});

    
module.exports = router;