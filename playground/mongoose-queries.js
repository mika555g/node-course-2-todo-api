const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ba8cecb31a78d3816dad98b11';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);    
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('id not found');        
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5ba4b339722ef284190696ff').then((user) => {
    if(!user) {
        return console.log('User not exist');
    }

    console.log(JSON.stringify(user, undefined, 2));       
}, (e) => {
    console.log(e);    
});