const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: "./config/config.env"})

const app = express()

// connect to database
const connectDataBase  = require('./config/dbConnect')
connectDataBase()

app.use(express.json())

// import router
const productRouter = require("./routes/products")

app.use("/api/v1", productRouter);


const port  = process.env.port

app.listen(port, () => {
    console.log(`the server start listen on port ${port} on ${process.env.NODE_ENV}`);
})
