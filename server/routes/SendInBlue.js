const express = require('express');
const app = express();
const SibApiV3Sdk = require('sib-api-v3-sdk');
//const AnimalProfiles = require('../database/models/animal_profiles');
const router = express.Router();
const axios = require('axios')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// const API_KEY = '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';

// const defaultClient = SibApiV3Sdk.ApiClient.instance;

// // Configure API key authorization: api-key
// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = API_KEY;
// // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// //apiKey.apiKeyPrefix['api-key'] = "Token"

// // Configure API key authorization: partner-key
// const partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = API_KEY
// // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// //partnerKey.apiKeyPrefix['partner-key'] = "Token"

// const api = new SibApiV3Sdk.AccountApi()
//     api.getAccount().then(function(data) {
//     console.log('API called successfully. Returned data: ' + data);
//     }, function(error) {
//     console.error(error);
// });

//route from front end to send transactional email
router.post('/', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    console.log(firstName)
    console.log(lastName)
    console.log(email)

    //send transactional email --- this one is for the welcome email
// axios
//     .post('https://api.sendinblue.com/v3/smtp/email',
//         {
//             headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
//         },
//         {
//             sender: {
//                 name:"PetPortal",
//                 email:"chelsea@mycreativeworks.ca"
//             },
//             to:[
//                 {
//                     email:"h@email.com",
//                     name:"bob bbbb"
//                 }
//             ],
//             params: {
//                 firstName:"New Value",
//                 lastName:"New Value"},
//                 templateId:1
//         }
//     )
//     .then((res) => {
//         res.json()
//     })
//     .then(json => {
//         console.log(json)
//     })
//     .catch(err => {
//         console.error('error:' + err)
//     })

})


    module.exports = router;