const fs = require('fs');

var file = String(process.argv[2]);



var buf = fs.readFileSync(file, 'utf-8');

findNewLines(buf);

function findNewLines(buf){
	
	var count = 0;

	var arr = buf.toString().split('\n');

	arr.forEach(function(){
		++count;
	})

	console.log(--count);

}