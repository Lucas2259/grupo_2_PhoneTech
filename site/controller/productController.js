const dbProducts = require("../data/database");
const fs = require("fs");
const path = require("path");

module.exports = {
    listar: function(req,res){
        res.render('products')
    }
}