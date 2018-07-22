const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const pet = require('./routers/petsDataBase.js')
const owner = require('./routers/ownerDataBase')


app.use(bodyparser.json());
app.use(express.static('server/public'));
app.use('/petsDataBase', pet);
app.use('/ownerDataBase', owner)

const port = process.env.PORT || 5000;
app.listen( port, ()=>{
    console.log('server is up', port)

    
});