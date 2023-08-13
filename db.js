// To connect with your mongoDB database
const {mongoClient, MongoClient} = require("mongodb");
const url ="mongodb://127.0.0.1:27017/";
const dbName = "nodejscrm";

const client = new MongoClient(url);
// Connecting to database
mongoose.set('strictQuery', true);
async function dbConnect()
{
  let result = await client.connect();
  return db = result.db(dbName);
}
  
module.exports = dbConnect;