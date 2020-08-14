var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
}),

router.get('/carga',function(req,res,next){
  res.render('carga')
})

router.get('/login', function(req,res,next){
 res.render('login')
})

 


/* GET carrito de compras*/
router.get('/cart', function(req, res, next) {
  res.render('productCart');
});
router.get('/register',function(req, res)
 {
  res.render('register');
})


module.exports = router;
