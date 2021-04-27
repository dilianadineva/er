const express = require("express")
const app = express()
const port = process.env.port || 5000
const people = require("./routes/people")
const cars = require("./routes/cars")

app.use(express.json())
app.use("/people", people)
app.use("/cars", cars)

app.get("/", (req, res) => {
    res.send("Hey there!")
})

app.route("/things")
    .get((req, res) => {
        res.send("Getting things")
    })
    .post((req, res) => {
        res.send("Posting things")
    })
    .delete((req, res) => {
        res.send("Deleting things")
    })

app.route("/things/:id")
    .get((req, res) => {
        res.send(req.params.id)
    })

app.listen(port, (err) => {
    if (err) {
        console.log("Something went wrong");
    }
    console.log("Listening on server 5000");
})