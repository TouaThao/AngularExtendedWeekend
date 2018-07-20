const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const petsDataBase = require('./routers/petsDataBase.js')

app.use(bodyparser.json());
app.use(express.static('server/public'));
app.use('/petsDataBase',petsDataBase);

const port = process.env.PORT || 5000;
app.listen( port, ()=>{
    console.log('server is up', port)

    
});