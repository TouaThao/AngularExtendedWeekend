let express = require('express');
const router = express.Router()
const pool = require('../module/pool');



// router post

router.post('/post', (req,res)=>{
    let pet = req.body
    console.log('IN Router Post')
    pool.query(`INSERT INTO "pets"
    ("name","color","breed","age","image_path","checkIn")
    values($1,$2,$3,$4,$5,$6);`,
    [pet.name, pet.color,pet.breed, pet.age, pet.image_path, pet.checkIn])
    .then((result)=>{
        console.log('IN Router.post', result)
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('IN Router.Post Error',error)
        res.sendStatus(500)
    })
})

router.post('/showNew', (req,res)=>{
    let owner = req.body
    console.log('IN Router Post')
    pool.query(`INSERT INTO "owner"
    ("firstName","lastName","city","image_path")
    values($1,$2,$3,$4);`,
    [owner.firstName, owner.lastName,owner.city, owner.image_path])
    .then((result)=>{
        console.log('IN Router.post', result)
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('IN Router.Post Error',error)
        res.sendStatus(500)
    })
})


// router get

router.get('/showOwner', (req, res) => {
    console.log('Router GET Owner');
    pool.query('SELECT * FROM "owner"')
        .then((respond) => {
            res.send(respond.rows);
        })
        .catch((error) => {
            console.log('In owner router.get error', error)
        })
})

router.get('/showPets', (req, res) => {
    console.log('Router GET Pet');
    pool.query('SELECT * FROM "pets" ORDER BY  "checkIn" ASC;')
        .then((respond) => {
            res.send(respond.rows);
        })
        .catch((error) => {
            console.log('In pet router.get error', error)
        })
})

// router delete


router.delete('/removePets',(req,res)=>{
    let petId= req.params.id;
    pool.query('DELETE FROM "pets" WHERE "id" = $1; ' [petId])
    .then((result)=>{
        console.log('In Delete', result)
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('Delete Error', error)
        res.sendStatus(500)
    })
})


module.exports = router;