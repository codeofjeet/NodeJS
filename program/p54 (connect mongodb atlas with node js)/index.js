const { MongoClient } = require('mongodb');

const url = 
"mongodb+srv://jeetendragangwar22571_db_user:jeet9413948313@cluster0.rcv6czu.mongodb.net/school?retryWrites=true&w=majority";
const database = "school";
const collectionName = "student";

const client = new MongoClient(url);

async function dbconnection() {
    try {
        // connect to MongoDB
        await client.connect();
        console.log("...Connected...");

        // select database
        const db = client.db(database);

        // select collection
        const collection = db.collection(collectionName);

        // fetch data
        const result = await collection.find().toArray();

        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

dbconnection();