'use strict';

var response = require('./respon');
var db = require('./db');

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.users = function(req, res) {
    db.query('SELECT * FROM person', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findUsers = function(req, res) {
    var user_id = req.params.user_id;
    db.query('SELECT * FROM person where id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    db.query('INSERT INTO person (first_name, last_name) values (?,?)',
    [ first_name, last_name ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    
    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    db.query('UPDATE person SET first_name = ?, last_name = ? WHERE id = ?',
    [ first_name, last_name, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah user!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    var user_id = req.body.user_id;
    db.query('DELETE FROM person WHERE id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus user!", res)
        }
    });
};