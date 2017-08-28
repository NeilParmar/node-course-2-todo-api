const{ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{User} = require('./../server/modules/user')
const {Todo} = require('./../server/modules/todo');

//User id:
var id = '59a1f1de4fe12d04e55035ee';

//Todo id:
// var id = '59a3742960d1a7067d692333';

if(!ObjectId.isValid(id)){
  console.log('ID not valid');
}

User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));



// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID',todo);
// }).catch((e) => console.log(e));
