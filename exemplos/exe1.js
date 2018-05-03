var div = document.getElementById('resultado');
for (var i = 0; i < 2000; i++) {
    if (i % 2 == 1) {
      var textnode = document.createTextNode(i);
      var br = document.createElement("br");
        div.appendChild(textnode);
        div.appendChild(br);
    }
}
