const express = require("express")
let router = express.Router()

router.use((req, res, next) => {
    console.log(req.path)
    console.log(req.url, "@", Date.now())
    next()
})
router.route("/:carid")
    .get((req, res) => {
        re
        s.send(req.params.carid)
    }) 

module.exports = router