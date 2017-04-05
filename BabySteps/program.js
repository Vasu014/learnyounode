function envSum(){

	var sum = 0;

	process.argv.forEach(function(val, i){
		if(i >= 2){
			sum += Number(val);
		}
	});

	return sum;
}

console.log(envSum());