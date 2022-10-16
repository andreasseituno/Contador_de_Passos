function botaozar() {
  var nam = window.document.getElementById("inicio");
  var paw = Number(nam.value);

  var nem = window.document.getElementById("fim");
  var pew = Number(nem.value);

  var nim = window.document.getElementById("passo");
  var piw = Number(nim.value);

  var res = window.document.getElementById("mensagem");

  res.innerHTML = `Contando: </br>`;

  if (piw == 0) {
    alert("Considerando passo como 1");
    piw = 1;
  }

  if (paw < pew) {
    for (var n = paw; n < pew; n = n + piw) {
      res.innerText += ` ${n} --> `;
    }
  } else {
    for (var n = paw; n > pew; n = n - piw) {
      res.innerText += ` ${n} --> `;
    }
  }

  res.innerHTML += "Você chegou ao seu destino";

  if (nam.value.length == 0 || nam.value.length == 0 || nam.value.length == 0) {
    res.innerHTML = `Adicione todos os valores!`;
  }
}
