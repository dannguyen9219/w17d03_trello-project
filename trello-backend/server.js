require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const taskController = require('./controllers/task')
const PORT = process.env.PORT || 3000;


app.use(cors()) // cors - cross origin resource sharing middleware - allow other ports to access the server if doing multiple apps - allows them to talk to each other
app.use(express.json()); // middleware to parse json data
app.use('/tasks', taskController)



// Listening Route //
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
});

