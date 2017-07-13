const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const secret = require('./secret');


const host = '127.0.01';
const port = 5000;

const app = express();
const db = secret.db_host;

app.use(express.static('client/build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

mongodb.connect(db, (err, db) => {
    if (err) {
        return console.log(err);
    }

    console.log("connected");

    app.get('/', (req, res, next) => {
        res.sendFile('index.html');
    });

    app.post('/login', (req, res, next) => {
        if (req.body.name && req.body.password) {
            db.collection('users').findOne({
                "name": req.body.name
            }, (err, doc) => {
                if (err) {
                    console.log(err);
                }

                if (!doc) {
                    res.end('WOOPS! WRONG INPUT');
                } else if (doc.name && doc.password) {
                    res.end(JSON.stringify({name: doc.name}));
                } else {
                    res.end('nope');
                }
            });
        }

    });

    app.listen(port, () => {
        console.log("listening");
    })


    // db.collection('users').findOne({
    //     _id: ObjectID("5962679e734d1d25634396d5")
    // }, (err,res)=>{
    //     if(err){
    //         return console.log(err);
    //     }

    //     console.log(res.name)

    //     db.close();
    // })
})