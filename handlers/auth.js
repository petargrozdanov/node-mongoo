const mUsers = require('../models/users');
const vUsers = require('../validators/user');
const validator = require('node-input-validator');
const bcrypt = require('bcryptjs');


const register = (req, res) => {
    var v = new validator.Validator(req.body, vUsers.createUser);
    v.check()
    .then(matched => {
        if(matched) {
            bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.password, salt, function(err, hash) {
                return mUsers.createUser({...req.body, password: hash})
    });
});
            return mUsers.createUser(req.body);
        } else {
            throw new Error('Validation failed');
        };
    })
    .then(() => {
        return res.status(201).send('ok');
    })
    .catch(err => {
        console.log(err);
        return res.status(500).send(v.errors);
    });
}

const login = () => {
    mUsers.getUserPasswordByEmail(req.body.email)
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
        if(err){
            return res.status(500).send('Could not compare user');
        };
        if(res){
            return res.status(200).send('ok');
        }
        return res.status(404).send('not found');
        
    });
    return res.status(200).send('ok');
}

const renew = () => {
    return res.status(200).send('ok');
}

const resetLink = () => {
    return res.status(200).send('ok');
}

const resetPassword = () => {
    return res.status(200).send('ok');
}

const changePassword = () => {
    return res.status(200).send('ok');
}

module.exports = {
    register,
    login,
    renew,
    resetLink,
    resetPassword,
    changePassword
};