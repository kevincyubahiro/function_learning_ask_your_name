import mysql from 'mysql2';
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"l5sod",
})
db.connect((err)=>{
    if(err){
        console.log('fail not connect');
    }
    else{
        console.log('yes connection successfuly');
    }
})
export default mysql;