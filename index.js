require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())
const port = process.env.port
const attribute=require('./routes/attribute')
app.use('/',attribute)


const department=require('./routes/department')
app.use('/',department)

const category=require('./routes/categories')
app.use('/',category)

const tax=require('./routes/tax')
app.use('/',tax)



const shipping=require('./routes/shiping')
app.use('/',shipping)

const product=require('./routes/product')
app.use('/',product)

const customer=require('./routes/customer')
app.use('/',customer)


const order=require('./routes/order')
app.use('/',order)

const ls = require("./routes/ls")
app.use('/',ls)


const shopping_cart=require('./routes/shopping_cart')
app.use('/',shopping_cart)
app.listen(port,()=>{
    console.log(`connected ${port}`);
})