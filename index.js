const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.x6oak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const MarathonCollection = client.db("MarathonDB").collection('events');
        const Marathon = client.db("MarathonDB").collection('Applied');

        // Marathons API POST
        app.post('/marathons', async (req, res) => {
            const event = req.body;
            const result = await MarathonCollection.insertOne(event);
            res.send(result);
        });

        // Marathons API FOR Limited Home:
        app.get('/marathons/home', async (req, res) => {
            const today = new Date().toISOString();
            const cursor = MarathonCollection.find({ registrationEnd: { $gte: today } });
            const result = await cursor.limit(6).toArray();
            res.send(result)
        })

        // Marathons API FOR ALL DATA:
        app.get('/marathons', async (req, res) => {
            const cursor = MarathonCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/marathons/all/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await MarathonCollection.findOne(query)
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});