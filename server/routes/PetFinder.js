const express = require('express');
const app = express();
const AnimalProfiles = require('../database/models/animal_profiles');
const router = express.Router();
const axios = require('axios')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//information for API access through PetFinder.com
const API_KEY = 'Ab8xQ5x4ko6Ue4EfS12b2T4jmijVdGltbWXPJ8zLreFMbC9Lo1';
const SECRET_KEY = 'vswXi2YoIUPufT0BrJCtRXoXKkJI8gEn16QehuXn';
const authToken = '';

//call to get token to access data --- expires every 3600
// axios
//     .post('https://api.petfinder.com/v2/oauth2/token',
//         {
//             grant_type:'client_credentials',
//             client_id: API_KEY,
//             client_secret: SECRET_KEY
//         }
//     )
//     .then((res) => {
//         this.authToken = res.data.access_token
//     })
//     .then(
//         axios
//             .get('https://api.petfinder.com/v2/animals?limit=25', { 
//                 headers: {
//                     Authorization: `Bearer ${authToken}`
//                 }
//             })
//             .then((res) => {
//                 this.setState({animals: res.data.animals})
//             })
//     )

//call to populate database
router
    .route('/')
    .get((req, res) => {
        AnimalProfiles.where(req.query)
        .fetchAll()
        .then(animals => {
            res.status(200).json(animals);
        })
    });


    
    
module.exports = router;