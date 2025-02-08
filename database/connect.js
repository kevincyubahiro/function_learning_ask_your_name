import mysql from 'mysql2';
const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"",
    database:"l5sod"
})

db.connect((err)=>{
    if(err){
        console.log('fail');
    }
    else{
        console.log('yes');
    }
})
export default db;