let mysql = require('mysql')

let details={
    user:'root',
    password:'',
    host:'localhost',
    database:'crud'
}

let connection = mysql.createConnection(details)

connection.connect(function(error){
    if(error){
        console.log(error.sqlMessage)
    }
    else{
        console.log("Database Connected")
    }
})

module.exports = connection