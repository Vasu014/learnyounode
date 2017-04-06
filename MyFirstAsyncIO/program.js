const fs = require('fs');

var file = String(process.argv[2]);

fs.readFile(file, 'utf-8', function(err, content){
	if(err){
		console.log(JSON.stringify(err));
	}

	var count = 0;
	var lineArray = content.split('\n');

	lineArray.forEach(function(){
		++count;
	})

	console.log(--count);

});