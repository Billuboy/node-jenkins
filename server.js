const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT ?? 8000; 
const ENV = process.env.APIS_ENV ?? 'development';

app.use(cors());

app.get('/', (_req, res)=> res.json({message: `${ENV} server is running.`}))

app.listen(PORT, ()=>{
  console.log(`${ENV} server is running at port: ${PORT}`)
})