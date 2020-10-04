import { mainModule } from "process";

const mongodb = require('mongodb')

//connect to collection or table
const MongoClient = mongodb.MongoClient;
//name of dataBase
const dbName: string = 'baranSM';
//address 
const dataBaseURL: string = 'mongodb://127.0.0.1:27017';

let dbset: any;

//connect to db
const mongoConnect = () => {
  MongoClient.connect(dataBaseURL, { useNewUrlParser: true })
    .then((client: any) => {
      console.log('connected!!!!!')
      dbset = client.db(dbName)
    })
    .catch((err: any) => console.log(err))
}

const getDB = () => {
  if (dbset) {
    return dbset;
  } else {
    throw 'dataBase not found!!!!'
  }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
