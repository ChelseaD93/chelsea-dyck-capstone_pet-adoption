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

//call to get token to access data --- expires every 3600
router.route('/update')
.get ((req, res) => {
axios
    .post('https://api.petfinder.com/v2/oauth2/token',
        {
            grant_type:'client_credentials',
            client_id: API_KEY,
            client_secret: SECRET_KEY
        }
    )
    .then((res) => {
        axios
            .get('https://api.petfinder.com/v2/animals?limit=5', { 
                headers: {
                    Authorization: `Bearer ${res.data.access_token}`
                }
            })
            .then((res) => {
                res.data.animals.map(animal=> {
                    console.log(animal.id)
                    new AnimalProfiles(
                        {
                            name: animal.name,
                            size: animal.size,
                            age: animal.age,
                            type: animal.species,
                            photo: animal.photos[0] || '',
                            link: animal.url
                        })
                        .save()
                })
            })
        })
    });
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