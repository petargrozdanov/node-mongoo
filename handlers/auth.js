const users = require('../models/users');
const vUsers = require('../models/users');
const validator = require('../models/users');

const register = (req, res) => {
    var v = new validator(req.body, vUsers.createUser);
    v.check()
    .then(matched => {
        if(mathced) {
            return mUsers.createUser(req.body)
        } else {
            throw new Error('Validation failed')
        }
    })
    return res.status(201).send('ok');
}
const login = (req, res) => {
    return res.status(200).send('ok');
}
const renew = (req, res) => {
    return res.status(200).send('ok');
}
const resetLink = (req, res) => {
    return res.status(200).send('ok');
}
const resetPassword = (req, res) => {
    return res.status(200).send('ok');
}
const changePassword = (req, res) => {
    return res.status(200).send('ok');
}

module.exports={
    register,
    login,
    renew,
    resetLink,
    resetPassword,
    changePassword
}