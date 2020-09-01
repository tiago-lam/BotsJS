function randomValueFromArray(array)
{
	return array[Math.floor(Math.random() * array.length)];
}

function putMapValuesInExpression(map, exp)
{
	Object.entries(map).forEach(([k,v]) => {
		exp = exp.replace(k,v)
	})
	return exp	
}

function checkAlphaNumeric(exp){
    var reg = /[^A-Za-z0-9 ]/;
    a = reg.test(exp).val();    
    console.log(a);
}