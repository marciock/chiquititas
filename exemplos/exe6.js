var nome_professor = 'chiquitto';
var nome_quebrado = nome_professor.split("");
nome_quebrado.sort();
nome_quebrado = nome_quebrado.join("");
document.getElementById('nome_professor').innerHTML = nome_professor;
document.getElementById('nome_quebrado').innerHTML = nome_quebrado;
