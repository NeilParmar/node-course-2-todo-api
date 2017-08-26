// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate:
    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('599b8c033e65a602b27b320d')
    // },{
    //   $set:{
    //     text: "Eat something",
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('599b9b48cf6a09a3633a1466')
    },
    // {
    //   $set:{
    //     name: "Neil"
    //   }
    // },
    {
      $inc:{
        age: 2
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    // db.close();
});
