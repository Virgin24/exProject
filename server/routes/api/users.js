const express = require("express");
const router = express.Router()


router.get("/", async (req, res) => {
    
    console.log(req.method, req.url)

    res.json({"message": "response gotten"})
})





module.exports = router;