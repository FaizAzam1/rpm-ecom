const connection = require('../model/dB.js')

//////////////// GET DATA//////////
const userget = async(req,res)=>{
    let sqlquery='SELECT * FROM emp '
    await connection.query(sqlquery,function(error,result){
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
}

// Insert Data post
const createData = async(req, res) =>{
    try {
        const data = req.body;
        const sqlquery = `INSERT INTO emp SET ?`
        await connection.query(sqlquery, data, (err, result) =>{
            if(err){
                return res.status(404).json({Error: err.message})
            }
            res.status(201).json({
                message: "Data inserted successfully",
                result
            })
        })
    } catch (error) {
        res.status(500).json({
            message:"server error",
            Error: error.message
        })
    }
}

// update Data 
const updateData = async(req, res) =>{
    try {
        const id = req.params.id
        const data = {
            name: req.body.name,
            age: req.body.age
        }
        const sqlquery = `UPDATE emp SET ? WHERE id = ?`
        await connection.query(sqlquery, [data, id], (err, result) =>{
            if(err){
                return res.status(404).json({Error: err.message})
            }
            res.status(201).json({
                message: "Data inserted successfully",
                result
            })
        })
    } catch (error) {
        res.status(500).json({
            message:"server error",
            Error: error.message
        })
    }
}

// Delete Data 
const deleteData = async(req, res) =>{
    try {
        const id = req.params.id
        const sqlquery = `DELETE FROM emp WHERE id = ?`
        await connection.query(sqlquery, [id], (err, result) =>{
            if(err){
                return res.status(404).json({Error: err.message})
            }
            res.status(201).json({
                message: "Data inserted successfully",
                result
            })
        })
    } catch (error) {
        res.status(500).json({
            message:"server error",
            Error: error.message
        })
    }
}

module.exports = {userget, createData, updateData, deleteData}