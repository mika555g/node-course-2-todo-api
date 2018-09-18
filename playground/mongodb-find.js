// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id : new ObjectID('5b9fa66f49aad348f82aefc2')
    //     }).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Ubable to fetch', err);
    // });
  
    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch', err);
    // });
    db.collection('Users').find({
            name: 'Mikayel'
        }).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch', err);
    });

    db.collection('Users').find({ name: 'Mikayel'}).toArray().then( (docs) => {
        console.log(`User`);
        console.log(JSON.stringify( docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch', err);
    });
    

    // db.close();
});