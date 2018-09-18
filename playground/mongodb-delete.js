// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to MongoDB server');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
    //     console.log(result);        
    // });
    // deleteONe
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
    //     console.log(result);        
    // });

    //find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteOne({
    //     _id: new ObjectID('5ba0c251d15ddd20a087286d')
    // }).then( (result) => {
    //     console.log(JSON.stringify(result, undefined, 2));        
    // })
    db.collection('Users').deleteMany({ name: 'Mikayel'}).then( (result) => {
        console.log(result);
    })
    // db.close();
});