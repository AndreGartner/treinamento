//alert('Olá Mundo');

//var h1Element = document.querySelector('h1');

//h1Element.innerHTML = 'Deu Boa';


var carro = true; // Boolean
console.log(carro);

var moto = null; // Null
console.log(moto);

var caminhao = undefined; // Undefined
console.log(caminhao);

var aviao = 100; // Number
console.log(aviao);

var balao = {}; // Object
console.log(balao);

console.log(carro);

var animal = 'gato';
console.log(animal);


// Operadores Matemáticos

// Adição/Contenação -> +

console.log(3 + 5);

console.log('Meu nome é ' + 'André');

// Subtração -> -

console.log(8-2);

// Multiplicação -> *

console.log(2*4);

// Divisão -> /

console.log(4/2);


// Operador de Atribuição = 

var sasas = 'sasas';

// Operador de Identificação == | ===

console.log( 10 == 10 );
console.log( '10' == 10 );
console.log( '10' === 10 );

// Operador de Negação -> !

console.log(10 == 10);
console.log(10 != 10);



// Operador de Comparação -> < > <= >=

console.log(2 < 10 ); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true
console.log(10 > 8); // true
console.log(10 >= 10); // true


// Condicionais

var verficar = true;

if (true) {
	console.log('Faça isso'); 
}else{
	console.log('Faça aquilo');
}


//EXEMPLO

var idade = 80;

if (idade >= 18) {

	console.log('Adulto');

}else if (idade > 14 && idade < 17){
console.log('Adolescente');

}else{
	console.log('Criança');
}



function periodoDaVida (idade) {


if (idade >= 18) {

	return'Adulto';

}else if (idade >= 14 && idade <= 17){
	return'Adolescente';

}else{
	return 'Criança';
}

}

document.getElementById('Enviar').onclick = function	() {
	var idade = document.getElementById('idade').value;
	if (isNaN(idade) || idade == '') {
		alert('Idade não é um número');
		return;
	}
	var periodo = periodoDaVida(idade);
	document.getElementById('resultado').innerHTML = periodo;

}







document.getElementById('adicao').onclick = function () {

		
		var valor1 = parseFloat(document.getElementById('valor1').value);

		console.log(valor1);


		var valor2 = parseFloat(document.getElementById('valor2').value);

		 var valor3 = (valor1 + valor2);

		 document.getElementById('valor3').value = valor3;


		document.getElementById('valor3').innerHTML;
		console.log(valor3);

}

document.getElementById('subtracao').onclick = function () {

		
		var valor1 = parseFloat(document.getElementById('valor1').value);

		console.log(valor1);


		var valor2 = parseFloat(document.getElementById('valor2').value);

		 var valor3 = (valor1 - valor2);

		 document.getElementById('valor3').value = valor3;


		document.getElementById('valor3').innerHTML;
		console.log(valor3);

}

document.getElementById('multiplicacao').onclick = function () {

		
		var valor1 = parseFloat(document.getElementById('valor1').value);

		console.log(valor1);


		var valor2 = parseFloat(document.getElementById('valor2').value);

		 var valor3 = (valor1 * valor2);

		 document.getElementById('valor3').value = valor3;


		document.getElementById('valor3').innerHTML;
		console.log(valor3);

}

document.getElementById('divisao').onclick = function () {

		
		var valor1 = parseFloat(document.getElementById('valor1').value);

		console.log(valor1);


		var valor2 = parseFloat(document.getElementById('valor2').value);

		 var valor3 = (valor1 / valor2);

		 document.getElementById('valor3').value = valor3;


		document.getElementById('valor3').innerHTML;
		console.log(valor3);

}


