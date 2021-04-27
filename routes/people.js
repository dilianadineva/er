const express = require("express")
let router = express.Router()

router.route("/")
    .get((req, res) => {
        res.send("Getting all the people")
    })

router.route("/:name")
    .get((req, res) => {
        res.send(`Getting info on ${req.params.name}`)
    })

module.exports = router