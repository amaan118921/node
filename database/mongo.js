const { MongoClient } = require("mongodb");

const client = new MongoClient('mongodb+srv://amaan118921:Amaan%40123@cluster0.n4njsk5.mongodb.net/test');
var db;
async function run() {
  try {
    await client.connect();

    db = client.db("TestDB");
  
  } catch(err) {
    console.log('error' + err)
  }
}
module.exports = {
  run,
  db
}


