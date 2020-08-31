let dbProductos = require('../data/database');
const fs= require('fs');
const path = require("path")

module.exports = {
    register:function(req, res){
        res.render('userRegister',{
            title:"Registro de Usuario"
        })
    },

    login:function(req, res){
        res.render('userRegister',{
            title:"Registro de Usuario"
        })
    }
}