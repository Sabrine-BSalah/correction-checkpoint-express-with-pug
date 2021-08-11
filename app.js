
const express = require("express");

const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + "/public"))

// Middleware for testing the day and the hour
const verifTime = require('./middleware/verifTime')
app.use(verifTime)


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})


// Connecting to the server
const port = 5000;

app.listen(port, (error) => {
    error ?
        console.log("Connection failed to the server !")
        :
        console.log(`Server is running on port ${port} ...`)
})