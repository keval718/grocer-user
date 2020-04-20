const cors = require('cors');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

//set a middleware to parse data
app.use(cors());
app.use(express.json());

try {
    //get results
    app.listen(port);
    console.log(`Server running on ` + port);
} catch (e) {
}