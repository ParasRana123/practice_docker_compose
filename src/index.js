import express from "express"

const app = express();

app.get("/" , (req , res) => {
    res.json({
        "message" : "Hi there"
    })
})

app.post("/" , (req , res) => {
    res.json({
        "message" : "Hi there 2"
    })
})

app.listen(3000);