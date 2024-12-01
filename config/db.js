const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

// load the db.env file
dotenv.config({ path: path.resolve(__dirname, 'db.env') });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // optional parameters for connection handling
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => console.log('MySQL connected successfully'))
    .catch((err) => console.error('Unable to connect to MySQL:', err));

module.exports = sequelize;