const mongoose = require('mongoose');
const encryption = require('../utils/encryption');
const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

let userSchema = new mongoose.Schema({
    email: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
    fullName: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE,  unique: true },
    salt: { type: mongoose.Schema.Types.String },
    hashedPass: { type: mongoose.Schema.Types.String },
    roles: { type: [mongoose.Schema.Types.String] }
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

let User = mongoose.model('User', userSchema);

module.exports = User;
module.exports.seedAdminUser = () => {
    User.find({}).then(users => {
        if (users.length > 0) return

        let salt = encryption.generateSalt();
        let hashedPass = encryption.generateHashedPassword(salt, '123456')

        User.create({
            email: 'Admin',
            fullName: 'Admin',
            salt: salt,
            hashedPass: hashedPass,
            roles: ['Admin']
        });
    });
};