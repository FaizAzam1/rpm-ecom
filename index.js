const express = require('express')
const app = express()
app.use(express.json())

const userRouter = require('./routes/empRoute')
app.use('/api',userRouter)

const port=5500
app.listen(port,()=>{
    console.log(`server is listening to port ${port}`)
})