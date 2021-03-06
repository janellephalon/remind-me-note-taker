const express = require('express');
const fs = require('fs');

// Instantiate the Server
const app = express();

// Initate Port
const PORT = process.env.PORT || 3001;

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/assets", express.static("./assets"));
app.use(express.static('public'));

// Routes
const apiRoutes = require('./routes/apiRoutes')(app);
const htmlRoutes = require('./routes/htmlRoutes')(app);

// Listener 
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}!`);
});

