const express = require("express")
const router = express.Router()

// http://localhost:3000/users
router.get("/",  (req, res) => {
    res.send("User List")
})

// http://localhost:3000/users/new
router.get("/new",  (req, res) => {
    res.send("Create List")
})

// http://localhost:3000/users/1
router.get("/:id",  (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
})

module.exports = router