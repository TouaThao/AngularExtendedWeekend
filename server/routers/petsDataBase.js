let express = require('express');
const router = express.Router()
const pool = require('../module/pool');



// router post

router.post('/post', (req,res)=>{
    console.log('IN Router Post')
    pool.query(`INSERT INTO`)
})

// router get

router.get('/showOwner', (req, res) => {
    console.log('Router GET');
    pool.query('SELECT * FROM "owner"')
        .then((respond) => {
            res.send(Response.rows);
        })
        .catch((error) => {
            console.log('In owner router.get error', error)
        })
})

router.get('/showPets', (req, res) => {
    console.log('Router GET');
    pool.query('SELECT * FROM "pets" ORDER BY  "checkIn" ASC;')
        .then((respond) => {
            res.send(respond.rows);
        })
        .catch((error) => {
            console.log('In pet router.get error', error)
        })
})

// router delete


module.exports = router;