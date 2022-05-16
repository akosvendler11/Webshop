var PlayStation4Slim500GB = 100000
var PlayStation4Slim500GBWhite = 110000
var PlayStation4Slim1TBSpidermanEdition = 135000
var PlayStation4Slim1TBPlayStationHits = 150000
var PlayStation4pro1TB = 130000
var PlayStation4pro1TBWhite = 135000
var PlayStation4pro1TBTheLastOfUsPart2Edititon = 150000
var PlayStation4pro1TBFifa21Edition = 180000


function hozzaad(PlayStation) {
    db = Number(prompt('Írjon be egy összeget'))
    localStorage.setItem(PlayStation, db)
}

function torles() {
    localStorage.clear()
}

function kos() {
    var list = "<tr><th style=\"width:450px; font-size: 40px;\">Termék </th><th style=\"width:450px; font-size: 40px;\">Mennyiség </th><th style=\"width:450px; font-size: 40px;\">Ár </th></tr>\n"

    var ossz = 0;
    var darab = 0;
    var key = "";


    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        darab = parseInt(localStorage.getItem(key));
        list += "<tr style=\"text-align: center; font-size: 20px;\"><td style=\"width:450px; font-size: 20px;\">" + key + "</td><td style=\"width:450px; font-size: 20px;\">" + "<button style:\"font-size: 20px;\" id=\"gombb\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"Írjon be egy összeget\")" + ")'>" + darab + "</button>" + "</td>" + "</td><td style=\"width:450px; font-size: 20px;\">" + (window[key] * darab) + " Ft" + "</td>" + "</td></tr>";
        ossz += window[key] * darab;
    }

    list += " <hr><tr> <th>Fizetendő </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"



    document.getElementById('tabla').innerHTML = list
}

function termekek() {
    var dbszam = 0;

    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        console.log(key)
        dbszam += Number(localStorage.getItem(key))
    }

    document.getElementById("darabszam").innerHTML = dbszam

}
