let imagen = $("#img-1");
let imagen2 = $("#img-2");
let personaje = $("#personaje");
let transformacion = $("#transformacion");
let raza = $("#raza");
let comparacion = $("#comparacion");
let pierde = '<i class="fa-solid fa-greater-than" style="font-size: 7rem;"></i>';
let gana = '<i class="fa-solid fa-angle-right" style="font-size: 7rem;"></i>';
let nombre = $("#nombre-p1");


personaje.change(() => {
  let opc = "<option>Seleccione...</option>";

  if (personaje.val() == "goku") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="1">Base</option>
        <option value="2">Super Saiyajin 2</option>
        <option value="3">Super Saiyajin 3</option>
        <option value="4">Super Saiyajin 4</option>
        <option value="5">Super Saiyajin Dios</option>
        <option value="6">Super Saiyajin Dios Azul</option>
        `;
    raza.val("Saiyajin");
  } else if (personaje.val() == "Vegeta") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="7">Base</option>
        <option value="8">Super Saiyajin fase 2</option>
        <option value="9">Super Saiyajin dios</option>
        <option value="10">Super Saiyajin dios azul</option>
        `;
    raza.val("Saiyajin");
  } else if (personaje.val() == "Krilin") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="11">Base</option>
        `;
    raza.val("Humano");
  } else if (personaje.val() == "Trunks") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="12">Base</option>
        <option value="13">Super Saiyajin fase 1</option>
        `;
    raza.val("Saiyajin-Humano");
  } else if (personaje.val() == "Picoro") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="14">Base</option>|
        `;
    raza.val("Namekuseijin");
  } else if (personaje.val() == "Dende") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="15">Base</option>
        `;
    raza.val("Namekuseijin");
  } else if (personaje.val() == "Majinbuu") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="16">Majin-buu</option>
        <option value="17">Buu</option>
        <option value="18">Super-buu</option>
        <option value="19">Majin Buu Malo</option>
        `;
    raza.val("Demonio");
  } else if (personaje.val() == "Blackgoku") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="20">Base</option>
        <option value="21">Super Saiyajin Dios</option>
        `;
    raza.val("Saiyajin-Kaioshin");
  } else if (personaje.val() == "Shin") {
    transformacion.prop("disabled", false);
    opc += `
        <option value="22">Base</option>
        `;
    raza.val("Kaiosama");
  } else {
    transformacion.prop("disabled", true);
  }
 
  transformacion.html(opc);
});

transformacion.change(() => {
  let tipo = $("#transformacion option:selected").text();
  let nom = $("#nombre option:selected").text();

  
  
  switch (transformacion.val()) {
    case "1":
      imagen.attr("src", "img/goku.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "2":
      imagen.attr("src", "img/goku2.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "3":
      imagen.attr("src", "img/goku3.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "4":
      imagen.attr("src", "img/goku4.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "5":
      imagen.attr("src", "img/gokudios.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "6":
      imagen.attr("src", "img/gokuazul.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "7":
      imagen.attr("src", "img/vegeta.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "8":
      imagen.attr("src", "img/vegeta2.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "9":
      imagen.attr("src", "img/vegetadios.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "10":
      imagen.attr("src", "img/vegetaazul.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "11":
      imagen.attr("src", "img/krilin.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "12":
      imagen.attr("src", "img/trunks.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "13":
      imagen.attr("src", "img/trunks2.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "14":
      imagen.attr("src", "img/picolo.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "15":
      imagen.attr("src", "img/dende.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "16":
      imagen.attr("src", "img/majinbuu.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "17":
      imagen.attr("src", "img/buu.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "18":
      imagen.attr("src", "img/superbuu.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "19":
      imagen.attr("src", "img/majinbuumalo.jpg");
      imagen2.attr("src", "img/menor.png");
      break;
    case "20":
      imagen.attr("src", "img/blackgoku.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "21":
      imagen.attr("src", "img/blackgokurosa.jpg");
      imagen2.attr("src", "img/mayor.png");
      break;
    case "22":
      imagen.attr("src", "img/kaioshin.jpg");
      imagen2.attr("src", "img/menor.png");
      break;

    default:
      personaje.text("");
      break;
  }
});
