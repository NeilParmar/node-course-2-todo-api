var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds163053.mlab.com:63053/todoapp'||'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
