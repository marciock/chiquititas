var p1 = new Promise((resolve, reject) => { 
    setTimeout(() => {
    	resolve(1)
    }, 5000); 
});
var p2 = new Promise((resolve, reject) => { 
    setTimeout(() => {
    	resolve(2)
    }, 3000); 
});

Promise.race([p1, p2])
.then((result) => {
	console.log(result);
});

function funcao() {
	p1.then((result) => {
		console.log(result);
	});
}

funcao();




