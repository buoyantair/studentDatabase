const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const secret = require('./secret');


const host = '127.0.01';
const port = 3000;

const app = express();
const db = secret.db_host;

app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongodb.connect(db, (err, db)=>{
    if (err){
        return console.log(err);
    }

    db.collection('users').findOne({
        _id: ObjectID("5962679e734d1d25634396d5")
    }, (err,res)=>{
        if(err){
            return console.log(err);
        }

        console.log(res.name)

        db.close();
    })
})

app.get('/', (req, res, next)=>{
    res.sendFile('index.html');
});

app.get('/login', (req, res, next)=>{
});

app.listen(port, ()=>{
    console.log("listening");
})
