const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: '5432',
    database: 'pethotel',
    max: 10,
    idleTimeoutMillis: 30000

});

pool.on('connected to Pool', function(){
    console.log('PG is connected');
});

pool.on('error', function(error){
    console.log('Error in PG', error);
});

module.exports = pool;