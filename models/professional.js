var mongoose = require('mongoose');

var professionalSchema = mongoose.Schema({

    company_name      : String,
    address           : String,
    phone             : String,
    contact_person    : String,
    email             : String,
    website           : String,
    primary_category  : String,
    secondary_category: String,
    core_products     : String,
    brand             : String,
    images            : String
    
    
});



// create the model for users and expose it to our app
module.exports = mongoose.model('Product', professionalSchema);
