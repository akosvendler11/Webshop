var PS4S5B = 100000
var PS4S5W = 110000
var PS4S1TBSpider = 135000
var PS4S1TBHits = 150000
var PS4pro1TB = 130000
var PS4pro1TBW = 135000
var PS4pro1TBLastOf = 150000
var PS4pro1TBFifa = 180000

function hozzaad(cucc) {
    db = Number(prompt('Írjon be egy összeget'));
    localStorage.setItem(cucc, db);
    location.reload();
}

function torles() {
    localStorage.clear()
    location.reload();
}

function kos() {
    var list = "<tr><th style=\"width:450px; font-size: 40px;\">Termék </th><th style=\"width:450px; font-size: 40px;\">Mennyiség </th><th style=\"width:450px; font-size: 40px;\">Ár </th></tr>\n"

    var ossz = 0;
    var menny = 0;
    var key = "";

    
    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        menny = Number(localStorage.getItem(key));
        list += "<tr style=\"text-align: center; font-size: 20px;\"><td style=\"width:450px; font-size: 20px;\">" + key + "</td><td style=\"width:450px; font-size: 20px;\">" + "<button style:\"font-size: 20px;\" id=\"gombb\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"Írjon be egy összeget\")" + ")'>" + menny + "</button>" + "</td>" + "</td><td style=\"width:450px; font-size: 20px;\">" + (window[key] * menny) + " Ft" + "</td><td>" + "<button style=\"width:100%; font-size: 20px; border: none; color: red; background-color: white;\" onclick='töröl(\"" + key + "\")'>X</button>" + "</td></tr>";
        ossz += window[key] * menny;
    }

    list += "<tr> <th>Fizetendő </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"

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

function ModifyItem(key, darab) {
    localStorage.setItem(key, Number(darab));
    location.reload();
}

function töröl(key) {
    localStorage.removeItem(key);
    location.reload();
}
