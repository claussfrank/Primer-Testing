var assert = require('assert');
var math.suma = require('../app.js');



describe('Prueba 1',function(){
	describe('math.suma de 2 números',function(){
		it('Deberia de retornar un número entero, si le paso  dos  numero entero',function(){
			assert.equal(math.suma(2,5),7);
		});
		it ('Deberia de retornar un número flotante, si le paso 1 número entero y  otro flotante',function(){
			assert.equal(math.suma(0.5,2),2.5);
		});
		it('Deberia de retornar mensaje de error, si el usuario no ingresa los 2 parámetros',function(){
			assert.equal(math.suma(3), 'Error, ha ingresado 1 número');
            assert.equal(math.suma(-12), 'Error, ha ingresado 1 número');
            assert.equal(math.suma(23.5), 'Error, ha ingresado 1 número');


            assert.equal(math.suma(), 'Error, ha ingresado 0 número');


            assert.equal(math.suma(1,2,3), 'Error, ha ingresado 3 números');
            assert.equal(math.suma(1,2,3, 20, 5), 'Error, ha ingresado 5 números');
		});
	});
});