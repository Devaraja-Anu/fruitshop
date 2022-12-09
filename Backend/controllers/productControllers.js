const Product = require('../models/product')

module.exports.product_post = (req,res) =>{

    const {fruit,image,price,Background} = req.body;

    try{
       Product.create({ fruit, image, price, Background });
       res.status(201).json(req.body.fruit)
    }
    catch(err){
        res.status(400).json(err)
    }
}

module.exports.product_get = (req,res)=>{
    try{
        Product.find()
        .then(result =>res.send(result))
        .catch(err => console.log('Error :-'+err))
    }
    catch(err){
        console.log(err);
    }
}