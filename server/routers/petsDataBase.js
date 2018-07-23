let express = require('express');
const router = express.Router()
const pool = require('../module/pool');



// router post

router.post('/post', (req,res)=>{
    let pet = req.body
    console.log('IN Router Post')
    pool.query(`INSERT INTO "pets"
    ("name","color","breed","age","image_path","owner_id","checkIn")
    values($1,$2,$3,$4,$5,$6,$7);`,
    [pet.name, pet.color, pet.breed, pet.age, pet.image_path, pet.owner_id, pet.checkIn])
    .then((result)=>{
        console.log('IN Router.post', result);
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('IN Router.Post Error',error);
        res.sendStatus(500)
    })
})



// router get

// router.get('/getOwnerInfo', (req,res)=>{
//     console.log('Getting ownerInfo so we could use it');
//     pool.query(`SELECT * FROM "owner"`)
//     .then((result)=>{
//         console.log(result.rows);
//         res.sendStatus(result.rows)
//     })
//     .catch((error)=>{
//         console.log('IN get owner info error',error)
//         res.sendStatus(500)
//     })
// })


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

router.delete('/:id', (req, res) => {
    
    const petsDataBase = req.params.id;
    pool.query(`DELETE FROM "pets"
                WHERE "id" = $1;`, [petsDataBase])
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('error on DELETE route', error);
            res.sendStatus(500);
        })
})

//router put

// router.put('/showEdit', (req,res) =>{
//     let edit = req.body;
//     pool.query(`UPDATE "pets" 
//     SET "name" = $1, "color" = $2, "breed" = $3,
//     "age" = $4, "image_path" = $5,
//     Where "id" = $6`,[edit.name, edit.color, edit.breed, edit.age, edit.image_path, edit.id])
//     .then((result)=>{
//         res.sendStatus(200);
//     })
//     .catch((error) =>{
//         res.sendStatus(500);
//     })
// })





module.exports = router;

