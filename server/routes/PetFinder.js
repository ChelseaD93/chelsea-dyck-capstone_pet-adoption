const express = require('express');
const app = express();
const AdopterProfiles = require('../database/models/adopter_profiles');
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//information for API access through PetFinder.com
const API_KEY = Ab8xQ5x4ko6Ue4EfS12b2T4jmijVdGltbWXPJ8zLreFMbC9Lo1;
const SECRET_KEY = vswXi2YoIUPufT0BrJCtRXoXKkJI8gEn16QehuXn;

//call to get token to access data --- expires every 3600
route
    .post('https://api.petfinder.com/v2/oauth2/token',
        {
            grant_type:'client_credentials',
            client_id: API_KEY,
            client_secret: SECRET_KEY
        }
    )
    .then((res) => {
        authToken = res.data.access_token
    })

    
    
module.exports = router;