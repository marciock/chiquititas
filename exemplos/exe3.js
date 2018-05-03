var nomes = ['João', 'Maria', 'José', 'Sebastião', 'Antônio'];
var div = document.getElementById('nomes');
for (var i = 0; i < nomes.length; i++) {
  if (nomes[i].length == 4) {
    var nome = document.createTextNode(nomes[i]);
    var br = document.createElement("br");
    div.appendChild(nome);
    div.appendChild(br);
  }
}
