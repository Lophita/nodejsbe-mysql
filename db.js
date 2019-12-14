var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejsbe"
});

db.connect(function (err){
    if(err) throw err;
});

module.exports = db;