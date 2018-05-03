let p = new Promise((resolve, reject) => {
	
	setTimeout(() => {
		resolve(2017);
	}, 3000);

});

let p2 = p.then((result) => {
	console.log(result);

	// return 1;
	return new Promise((resolve, reject) => {
		//resolve(1);

		setTimeout(() => {
			resolve(2018);
		}, 3000);

	});
});

p2.then((result) => {
	console.log(result);
});






