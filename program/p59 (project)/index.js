import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path'
import { ObjectId } from 'mongodb';


const app = express()
const publicPath = path.resolve('public')

app.set("view engine", "ejs")
app.use(express.static(publicPath))

const dbName = "node-project";
const collectionName = "todo";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const connection = async()=>{
    const connect = await client.connect()
    return await connect.db(dbName)
}

app.use(express.urlencoded({extended:false}))

app.get('/', async (req, res) => {
    const db = await connection();
    const collection = db.collection(collectionName);
    const tasks = await collection.find().toArray();

    res.render("list", { tasks });
});

app.get('/add', (req, res)=>{
    res.render("add")
})

app.get('/update/:id', async (req, res) => {
    const db = await connection();
    const collection = db.collection(collectionName);

    const task = await collection.findOne({
        _id: new ObjectId(req.params.id)
    });

    res.render("update", { task });
});

app.post('/add', async (req, res) => {
    const db = await connection();
    const collection = db.collection(collectionName);

    const result = await collection.insertOne({
        title: req.body.title,
        desc: req.body.desc,
        completed: false   // 👈 add this line
    });

    if (result) {
        res.redirect("/");
    } else {
        res.redirect("/add");
    }
});

app.post('/update', async (req, res) => {
    const db = await connection();
    const collection = db.collection(collectionName);

    const { id, title, desc } = req.body;

    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title: title,
                desc: desc
            }
        }
    );

    if (result.modifiedCount > 0) {
        res.redirect('/');
    } else {
        res.send("Update failed");
    }
});

app.post('/delete/:id', async (req, res) => {
    const db = await connection();
    const collection = db.collection(collectionName);

    await collection.deleteOne({
        _id: new ObjectId(req.params.id)
    });

    res.redirect('/');
});

app.post('/complete/:id', async (req, res) => {
    const db = await connection();
    const collection = db.collection(collectionName);

    const task = await collection.findOne({
        _id: new ObjectId(req.params.id)
    });

    await collection.updateOne(
        { _id: task._id },
        { $set: { completed: !task.completed } }
    );

    res.redirect('/');
});

app.get('/', async (req, res) => {
    const db = await connection();
    const collection = db.collection(collectionName);

    const search = req.query.search;

    let query = {};

    if (search) {
        query.title = { $regex: search, $options: "i" };
    }

    const tasks = await collection.find(query).toArray();

    res.render("list", { tasks });
});

app.listen(3200)