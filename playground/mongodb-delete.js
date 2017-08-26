// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Users').deleteMany({name: 'Neil'}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //   console.log(result);
    // });

    //fineOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID("599b91069a107102b9bdd8f5")}).then((result) => {
      console.log(result);
    });

    // db.close();
});
