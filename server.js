import express from 'express';
import db from './connect.js';

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server started");
});


app.post('/student', (req, res) => {
   
    const { lname, fname, age } = req.body;

    // const Values = [fname, lname, age];  

    const sql = "INSERT INTO student (fname, lname, age) VALUES (?, ?, ?)";
    db.query(sql, [fname ,lname,age] ,(err, result) => {
        if (err) {
            console.error("Failed to register student:", err);
            return res.status(404).json({
                status: 404,
                message: 'Student Not Registered'
            });
        } else {
            return res.status(200).json({ 
                status: 200,
                message: "Success"
            });
        }
    });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});