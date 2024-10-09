const { connect, connection } = require('mongoose');

const connectionString =
    process.env.MONGOBD_URI || 'mongodb://localhost:3001/socialDB';

connect (connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;