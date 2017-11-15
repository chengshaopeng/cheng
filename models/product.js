var mongoose = require('mongoose');

var productSchema = mongoose.Schema({

    manufacturer_name : String,
    product_name      : String,
    primary_category  : String,
    second_category   : String,
    tertiary_category : String,
    descripting       : String,
    price             : String,
    dimension         : String,
    colour            : String,
    weight            : String,
    assembly_required : String,
    style             : String,
    keywords          : String, 
    images            : String
    
    
});



// create the model for users and expose it to our app
module.exports = mongoose.model('Product', productSchema);
