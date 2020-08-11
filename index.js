const express = require('express') 
const app = express()
const port = process.env.PORT || 3000 

//backend stuff
// const mongoose = require('mongoose');

app.get('/', (req, res) => { console.log("Hello, Jamalul!") } )

app.listen(port, () => { console.log("listening on port " + port)})