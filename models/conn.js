const pgp = require('pg-promise')();
const options = {
    host:'localhost',
    database:'burrito-app'
};
const db = pgp(options);
module.exports=db;