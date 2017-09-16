const{ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{User} = require('./../server/modules/user')
const {Todo} = require('./../server/modules/todo');

//Delete multiple documents
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59bc6fcbc4d5342a180a712b'}).then((todo) => {

});

Todo.findByIdAndRemove('59bc6fcbc4d5342a180a712b').then((todo) => {
  console.log(todo);
});
