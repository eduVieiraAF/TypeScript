import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world with real-time transpile 2");
});

app.listen(3000, () => console.log("Server is listening..."))