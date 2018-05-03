// Nome, email, cpf, idade, genero

let p = new Promise((resolve, reject) => {
	mostrarLoading();

	resolve(1);
	//reject('Reject de primeira');
})
.then(validarNome)
.then(validarEmail)
.then(validarCpf)
.then(validarIdade)
.then(validarGenero)
.catch(tratarReject)
.then(esconderLoading)
;

function mostrarLoading() {
	console.log('Mostrar Loading');
}

function esconderLoading() {
	console.log('Esconder Loading');
}

function validarNome(result) {
	console.log('Validar nome');

	return result;
}

function validarEmail(result) {
	console.log('Validar email');

	return new Promise((resolve, reject) => {

		// Simular tempo de consulta no BD
		setTimeout(() => {
			resolve(1);
		}, 3000);

	});
}

function validarCpf(result) {
	console.log('Validar Cpf');

	return new Promise((resolve, reject) => {

		// Simular tempo de consulta no BD
		setTimeout(() => {
			resolve(1);
		}, 3000);

	});
}

function validarIdade(result) {
	console.log('Validar Idade');

	return 1;
}

function validarGenero(result) {
	console.log('Validar Genero');

	return 1;
}

function tratarReject(reason) {
	console.log(reason);
}




