let express = require('express');

let router = express.Router();

let pool = require('../module/pool');

router.get('/showOwner', (req, res) => {
    console.log('Router GET Owner');
    pool.query('SELECT * FROM "owner"')
        .then((respond) => {
            res.send(respond.rows);
        })
        .catch((error) => {
            console.log('In owner router.get error', error)
        })
});


router.post('/showNew', (req,res)=>{
    let owner = req.body
    console.log('IN Router Post')
    pool.query(`INSERT INTO "owner"
    ("firstName","lastName","city","image_path")
    values($1,$2,$3,$4);`,
    [owner.firstName, owner.lastName,owner.city, owner.image_path])
    .then((result)=>{
        console.log('IN Router.post', result);
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('IN Router.Post Error',error);
        res.sendStatus(500)
    });
});


router.delete('/:id', (req,res)=>{
    console.log('Did i even got here??')
    const removeOwner = req.params.id 
    pool.query(`DELETE FROM "owner"
                    WHERE "id" = $1;`, [removeOwner])
    .then((result)=>{
        res.sendStatus(201)
    })
    .catch((error)=>{
        res.sendStatus(500)
    });
});
module.exports = router;