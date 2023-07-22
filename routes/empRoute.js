const express = require('express');

const userRouter = express.Router();
userRouter.use(express.json())
const {userget, createData, updateData, deleteData} = require ('../controller/empcontroller')
userRouter.get('/userget',userget)
userRouter.post('/postdata',createData)
userRouter.put('/updatedata/:id',updateData)
userRouter.delete('/deletedata/:id',deleteData)
module.exports = userRouter