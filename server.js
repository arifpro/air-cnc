const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
require('dotenv').config()

const app = express()

app.use(cors())
// parse application/json
app.use(bodyParser.json());

const uri = process.env.DB_PATH
let client = new MongoClient(uri, { useNewUrlParser: true });


app.get('/', (req, res) =>{
    res.send('This is Backend of Air-CNC')
})


app.get('/hotels/:id', (req, res) => {
    const id = req.params.id
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("aircnc").collection("hotels");
      collection.find({id}).toArray((err, documents) => {
        if (err) {
          console.log(err);
          res.status(500).send({ message: err });
        } else {
          res.send(documents[0]);
        }
      });
      client.close();
    });
})



// booking add
app.post('/addBooking', (req, res) => {
  const patientsDetails = req.body
  patientsDetails.orderTime = new Date()
  client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("aircnc").collection("bookingList");
    collection.insertOne(patientsDetails, (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send({ message: err })
      } else {
        res.send(result.ops[0]);
      }

    })
    client.close();
  });
}) 


const port = process.env.PORT || 4400
app.listen(port, () => console.log(`Listening to port ${port}`))