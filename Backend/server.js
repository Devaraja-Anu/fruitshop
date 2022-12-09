const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')
const cookieParser = require('cookie-parser')

const app  = express();

app.use(express.json())
app.use(cookieParser());

const dbURI =
  "mongodb+srv://trialpassword:trialpassword@cluster0.6dqtzpu.mongodb.net/fruits";


app.use(authRoutes);
app.use(productRoutes);


mongoose.connect(dbURI)
    .then(result=>app.listen(3000),console.log('Connected '))
    .catch(err=>console.log(err))

