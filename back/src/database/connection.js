var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user: 'root',
        password: 'root',
        database: 'BEFOUND'
    }
});
module.exports = knex