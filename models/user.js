const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Must match a valid email address`],
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "thought",
    },
    ],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    ],
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const user = mongoose.model('user', userSchema);
module.exports = user;