const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const uri = "mongodb+srv://{username}:{password}@{host}/{dbname}?retryWrites=true&w=majority"

const init = (config) => {
    mongoose.connect(parseCString(config), 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => {
        console.log('connected');
        // console.log(err);
    })
    .catch(err => { 
        console.log(err);
    });
}

const parseCString = (config) => {
    var cs = uri.replace('{username}', config.username);
     cs = cs.replace('{password}', config.password);
     cs = cs.replace('{host}', config.host);
     cs = cs.replace('{dbname}', config.dbname);
     return cs;
}

module.exports = {
    init
}