const  express = require ('express');
const bodyParser = require ('body-parser');
const config = require ('../config/index.js');
const db = require ('../db/connection');

db.init(config.getConfig('db'));

var api = express ();

api.post('/api/v1/register');
api.post('/api/v1/login');
api.get("/api/v1/renew");
api.post('/api/v1/reset-password');