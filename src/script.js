const sumar = (a, b) => {
	console.log(a + b);
};

let a = 5,
	b = 10;
sumar(a, b);

/*********ARROW PARENS**************/

const saludar = nombre => console.log(`Hola ${nombre}`);

saludar('Joao');

/************SEMI & SINGLE-QUOTE****************/

console.log('This is a message');
console.log('This is a message');
console.log('This is a message');
console.log('This is a message');
console.log('This is a message');
console.log(`This is a message`);

/************OBJECTS - TRAILING COMMA****************/

const persona = {
	nombre: 'elliot',
	apellido: 'Aderson',
	edad: 25,
	sexo: 'M',
	nacionalidad: 'americano'
};
