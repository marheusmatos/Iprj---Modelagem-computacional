/* funçoes de uso geral / mais ultilizadas */

// FUNÇÃO DE MOSTRAR DADOS (BARRA DE STATUS)
function mostrarDados() {
  //Buscando dados dos range's sliders
  let rangevalue2 = document.getElementById("range2").value;
  let rangevalue1 = document.getElementById("range1").value;
  let rangevalue3 = document.getElementById("range3").value;
  //Buscando dados dos radio's buttons
  let r1 = document.getElementById("r1");
  let r2 = document.getElementById("r2");
  // ------------------ CHECANDO O PRIMEIRO BOTÃO RADIO
  if (r1.checked == true) {
    document.getElementById("statusgerador").innerHTML =
      "Foi gerada uma malha <b>circular</b> com o diâmetro de <b>" +
      rangevalue1 +
      "</b> pixels e grau de refinamento de <b>" +
      rangevalue2 +
      "</b>%.";
    // REMOVENDO O ÍCONE DE CARREGAMENTO
    document
      .getElementById("loadingspinner")
      .classList.remove("spinner-border");
  }
  // ------------------- CHECANDO O SEGUNDO BOTÃO RADIO
  else if (r2.checked == true) {
    document.getElementById("statusgerador").innerHTML =
      "Foi gerada uma malha <b>quadrangular</b> com o lado de <b>" +
      rangevalue1 +
      "</b> pixels e grau de refinamento de <b>" +
      rangevalue2 +
      "</b>%.";
    //REMOVENDO O ÍCONE DE CARREGAMENTO
    document
      .getElementById("loadingspinner")
      .classList.remove("spinner-border");
  }
  // ------------------- CHECANDO O TERCEIRO BOTÃO RADIO
  else if (r3.checked == true) {
    document.getElementById("statusgerador").innerHTML =
      "Foi gerada uma malha <b>retangular</b> com a base de <b>" +
      rangevalue1 +
      "</b> pixels e altura de <b>" +
      rangevalue3 +
      "</b> pixels. </br> e com grau de refinamento de <b>" +
      rangevalue2 +
      "</b>%.";
    //REMOVENDO O ÍCONE DE CARREGAMENTO
    document
      .getElementById("loadingspinner")
      .classList.remove("spinner-border");
  }
  // ------------------- CHECANDO O QUARTO BOTÃO RADIO
  else if (r4.checked == true) {
    document.getElementById("statusgerador").innerHTML =
      "Foi gerada uma malha <b>elipsoidal</b> com o eixo x de <b>" +
      rangevalue1 +
      "</b> pixels e eixo y de <b>" +
      rangevalue3 +
      "</b> pixels. </br> e com grau de refinamento de <b>" +
      rangevalue2 +
      "</b>%.";
    //REMOVENDO O ÍCONE DE CARREGAMENTO
    document
      .getElementById("loadingspinner")
      .classList.remove("spinner-border");
  }
  // ------------------- MENSAGEM DE ERRO SE NÃO FOR SELECIONADO
  else {
    alert("Por favor, selecione algum formato!");
  }
}
// FUNÇÃO DE DESENHAR O DOMÍNIO
function renderizar() {
  let largurasvg = 420; // <<<<<<<<--------------------------- DEFINIR A O TAMANHO DO LADO DO SVG

  let alturasvg = largurasvg;
  let metadealturasvg = alturasvg / 2;
  let metadelargurasvg = largurasvg / 2;

  let rangevalue2 = document.getElementById("range2").value;
  let rangevalue1 = document.getElementById("range1").value;
  let rangevalue3 = document.getElementById("range3").value;
  let rangevalue4 = document.getElementById("range4").value;

  let r1 = document.getElementById("r1");
  let r2 = document.getElementById("r2");

  let centerx = metadealturasvg - rangevalue1 / 2;
  let centery = metadelargurasvg - rangevalue3 / 2;

  if (r1.checked == true) {
    document.getElementById("svg").innerHTML =
      " <circle  r=" +
      rangevalue1 / 2 +
      " cx=" +
      metadealturasvg +
      " cy=" +
      metadelargurasvg +
      " fill='#27293d' fill-opacity='0' stroke='white' stroke-width='4'/>";
  } else if (r4.checked == true) {
    document.getElementById("svg").innerHTML =
      " <ellipse rx=" +
      rangevalue1 / 2 +
      " ry=" +
      rangevalue3 / 2 +
      " cx=" +
      metadealturasvg +
      " cy=" +
      metadelargurasvg +
      " fill='#27293d' fill-opacity='0' stroke='white' stroke-width='4' transform='rotate(" +
      rangevalue4 +
      "," +
      metadealturasvg +
      "," +
      metadelargurasvg +
      ")'/>";
  } else if (r3.checked == true) {
    document.getElementById("svg").innerHTML =
      "<rect x=" +
      centerx +
      " y=" +
      centery +
      " rx='0' ry='0' width=" +
      rangevalue1 +
      " height=" +
      rangevalue3 +
      " fill='#27293d' fill-opacity='0' stroke='white' stroke-width='4' transform='rotate(" +
      rangevalue4 +
      "," +
      metadealturasvg +
      "," +
      metadelargurasvg +
      ")'/>";
  } else if (r2.checked == true) {
    document.getElementById("svg").innerHTML =
      "<rect x=" +
      centerx +
      " y=" +
      centerx +
      " rx='0' ry='0' width=" +
      rangevalue1 +
      " height=" +
      rangevalue1 +
      " fill='#27293d' fill-opacity='0' stroke='white' stroke-width='4' transform='rotate(" +
      rangevalue4 +
      "," +
      metadealturasvg +
      "," +
      metadelargurasvg +
      ")'/>";
  } else {
    alert("fuirbg");
  }
}
// FUNÇÃO DE RECARREGAR PÁGINA
function refresh() {
  window.location.reload();
}
// FUNÇÃO DE ALTERAR O FORMULARIO DEPENDENDO DO FORMATO SELECIONADO
function alterarLabelDimensao_Circle() {
  document.getElementById("labelrange1").innerHTML = "Diâmetro";
  document.getElementById("labelrange3").innerHTML =
    "<span style='color: rgb(92, 92, 92);'>Desativado</span>";

  document.getElementById("range3").setAttribute("disabled", true);
  document.getElementById("range4").setAttribute("disabled", true);
  document.getElementById("spanlabelrange4").innerHTML = "(Desativado) ";
}
function alterarLabelDimensao_Square() {
  document.getElementById("labelrange1").innerHTML = "Lado";
  document.getElementById("labelrange3").innerHTML = "Altura";
  document.getElementById("labelrange3").innerHTML =
    "<span style='color: rgb(92, 92, 92);'>Desativado</span>";

  document.getElementById("range3").setAttribute("disabled", true);
  document.getElementById("range4").removeAttribute("disabled");
  document.getElementById("spanlabelrange4").innerHTML = "(Graus) ";
}
function alterarLabelDimensao_Rect() {
  document.getElementById("labelrange1").innerHTML =
    " <span title=''>Base</span>";
  document.getElementById("labelrange3").innerHTML = "Altura";

  document.getElementById("range3").removeAttribute("disabled");
  document.getElementById("range4").removeAttribute("disabled");
  document.getElementById("spanlabelrange4").innerHTML = "(Graus) ";
}
function alterarLabelDimensao_Elipse() {
  document.getElementById("labelrange1").innerHTML =
    "Eixo <span style='color: rgb(92, 92, 92); font-size: 15px;'>(X)</span>";
  document.getElementById("labelrange3").innerHTML =
    "Eixo <span style='color: rgb(92, 92, 92); font-size: 15px;'>(Y)</span>";

  document.getElementById("range3").removeAttribute("disabled");
  document.getElementById("range4").removeAttribute("disabled");
  document.getElementById("spanlabelrange4").innerHTML = "(Graus) ";
}
