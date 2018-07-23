let express = require('express');
const router = express.Router()
const pool = require('../module/pool');



// router post

router.post('/post', (req,res)=>{
    let pet = req.body
    console.log('IN Router Post')
    pool.query(`INSERT INTO "pets"
    ("name","color","breed","age","image_path","owner_id")
    values($1,$2,$3,$4,$5,$6);`,
    [pet.name, pet.color, pet.breed, pet.age, pet.image_path, pet.owner_id])
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


router.get('/showPets', (req, res) => {
    console.log('Router GET Pet');
    pool.query('SELECT p."id", p."name", p."color", p."breed", p."age", p."image_path", p."checkIn", o."firstName" FROM "pets" as p INNER JOIN "owner" as o ON o."id" = p."owner_id" ORDER BY  p."checkIn" ASC;')
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

router.put('/showEdit', (req,res) =>{
    let edit = req.body;
    pool.query(`UPDATE "pets" 
    SET "name" = $1, "color" = $2, "breed" = $3,
    "age" = $4, "image_path" = $5,
    Where "id" = $6`,[edit.name, edit.color, edit.breed, edit.age, edit.image_path, edit.id])
    .then((result)=>{
        res.sendStatus(200);
    })
    .catch((error) =>{
        res.sendStatus(500);
    })
})

router.put('/checkIn', (req, res) => {
    
    console.log('update checking in pet',req.body);
    pool.query(`UPDATE "pets" SET "checkIn" = NOT "checkIn" WHERE "id"=$1;`, [req.body.id])
        .then((result) => {
            console.log('made it to put');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error on put', error);
            res.sendStatus(500);
        })
});

router.put('/save', (req,res)=>{
    console.log('check update')
    pool.query(`UPDATE "pets" SET "name" = $1, "color" = $2, "breed" = $3, "age" = $4 WHERE "id" = $5 `, [req.body.name, req.body.color, req.body.breed, req.body.age, req.body.id])
    .then((result)=>{
        res.sendStatus(200);
    })
    .catch((error)=>{
        console.log('Error', error)
        res.sendStatus(500)
    })
})




module.exports = router;

