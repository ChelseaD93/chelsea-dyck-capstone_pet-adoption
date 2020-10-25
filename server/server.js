const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8080;
const SignUpRoutes = require('./routes/SignUp');
// const PetFinderRoutes = require('./routes/PetFinder');
// const SendInBlueRoutes = require('./routes/SendInBlue');

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use('/sign-up', SignUpRoutes);

// app.use('/pet-finder', PetFinderRoutes);

// app.use('/send-in-blue', SendInBlueRoutes);

app.listen(port, () => console.log(`Running on ${port}`));