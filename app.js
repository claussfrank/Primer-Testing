
function suma (num1,num2){
	
var params= arguments.length;
//	if (typeof num2 === 'undefined'){
//		return 'Error';
//	}
	if (params !== 2){
		return'Error, ha ingresado '+ params + ' número' + (params > 2 ? 's':'');
	}
	return num1+num2;
};

function resta (num1,num2){
	
}

module.exports = {
	suma : suma,
	resta : resta
};