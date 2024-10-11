import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';

const {Client} =pg;
const client = new Client({
    user:'postgres',
    host:'db',
    database:'postgres',
    password:'12345',
    port:5432,

});
client.connect();

const createTable = async () =>{
    await client.query(`CREATE TABLE IF NOT EXISTS users(id serial PRIMARY KEY, 
        name VARCHAR (255) UNIQUE NOT NULL, email VARCHAR (255) UNIQUE NOT NULL, 
        age INT NOT NULL );`)
}; //定義一個非同步函數

createTable();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    res.send('Hello World!');
}); //ip 加 /app 回傳 