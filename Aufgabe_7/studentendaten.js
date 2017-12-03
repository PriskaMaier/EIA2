/*
Aufgabe: Nr. 7 - StudiVZ
Name: Priska Maier
Matrikel: 256326
Datum: 03.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var Aufg_7;
(function (Aufg_7) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen (a) oder Programm beenden (s)\nn, a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = m\u00e4nnlich oder 1 = weiblich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let s = _input.split(",", 6);
        if (s.length == 6) {
            let _matrikel = parseInt(s[0], 10);
            let _alter = parseInt(s[3], 10);
            let _geschlecht = parseInt(s[4], 10) == 1;
            let name = s[1];
            let vorname = s[2];
            let kommentar = s[5];
            let studentsInput = {
                matrikel: _matrikel,
                name: name,
                vorname: vorname,
                alter: _alter,
                geschlecht: _geschlecht,
                kommentar: kommentar
            };
            if (Number.isNaN(_matrikel)) {
                console.log("fehler - matrikelnummer");
                return "Fehler - Matrikelnummer falsch";
            }
            if (Number.isNaN(_alter)) {
                console.log("fehler - alter");
                return "Fehler - Alter falsch";
            }
            students.push(studentsInput);
            return "Speicherung erfolgreich!";
        }
        else {
            return "Fehler - Eingabe falsch";
        }
    }
    function queryData(_matrikel) {
        let q = false;
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                q = true;
                let geschlecht = students[i].geschlecht ? "weiblich" : "m\u00e4nnlich";
                return "Gefundene Daten zur Matrikelnummer: " + students[i].matrikel + "\n" +
                    "\nName: " + students[i].vorname + students[i].name +
                    "\nAlter: " + students[i].alter +
                    "\nGeschlecht: " + geschlecht +
                    "\nKommentar: " + students[i].kommentar;
            }
        }
        if (q == false) {
            return "Fehler - Matrikelnummer " + _matrikel + " nicht gefunden";
        }
    }
})(Aufg_7 || (Aufg_7 = {}));
//# sourceMappingURL=studentendaten.js.map