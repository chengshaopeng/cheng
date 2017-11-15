var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/user';
exports.profession= function(req, res) {

  // var MongoClient = require('mongodb').MongoClient;
  // var DB_CONN_STR = 'mongodb://localhost:27017/user';    
 
   	var selectData = function(db, callback) {  
  //连接到表  
    var collection = db.collection('professionals');
  //查询数据
    collection.find().toArray(function(err, result) {
      	if(err)
      	{
        	console.log('Error:'+ err);
        	return;
      	}     
      		callback(result);
    	});
  	}
 
    MongoClient.connect(DB_CONN_STR, function(err, db) {
    	console.log("连接成功！");
    	selectData(db, function(result) {
      		res.render('showprofessional',{
                     result:result
        	}); 
      		db.close();
    	});
  	});
     
       
      
};

exports.createpdt= function(req, res) {

	var insertData = function(db, callback) {  
	    //连接到表 product
	    var collection = db.collection('products');
	    
	    //插入数据
	    //var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
	    //collection.insert(data, function(err, result) { 
	    //    if(err)
	    //    {
	    //        console.log('Error:'+ err);
	    //        return;
	    //    }     
	    //   callback(result);
	    //});
	}
 
	MongoClient.connect(DB_CONN_STR, function(err, db) {
	    console.log("连接成功！");
	    insertData(db, function(result) {
	        console.log(result);
	        db.close();
	    });
	}); 

};

