import express from "express";
const app = express();
app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Server started');
});
app.listen(4000, () => {
    console.log("Server is running at http://localhost:4000");
});
