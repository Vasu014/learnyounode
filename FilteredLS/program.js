
const fs = require('fs');
const path = require('path');

var file = String(process.argv[2]);
var ext = String(process.argv[3]);


fs.readdir(file,'utf-8',function(err, fileList){
	if(err){
		console.log(JSON.stringify(err));
	}

	ext = '.' + ext;
	fileList.forEach(function(file){
		if(path.extname(file) == ext){
			console.log(file);	
		}
		
	});
});