const mongoose = require('mongoose');
const { schema } = require('./user');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.schema.type,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);