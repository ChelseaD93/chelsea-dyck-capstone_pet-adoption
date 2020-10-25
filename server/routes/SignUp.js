const express = require('express');
const app = express();
const Adopter_Profiles = require('../database/models/adopter_profiles');
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json);