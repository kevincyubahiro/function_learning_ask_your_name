import express from "express";
import db from "./connect.js";
const app = express();
app.use(express()); 
app.get('/', (req, res) => {
    res.send('Server started');
});

app.listen(2000, () => {
    console.log("Server is running at http://localhost:2000");
});
