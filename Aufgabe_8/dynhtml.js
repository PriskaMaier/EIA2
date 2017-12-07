/*
Aufgabe: Nr. 8 - DynHTML: RandomBoxes
Name: Priska Maier
Matrikel: 256326
Datum: 07.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var Aufg_8;
(function (Aufg_8) {
    window.addEventListener("load", input);
    function input() {
        let n = prompt("Bitte gib die gew\u00fcnschte Anzahl von Quadraten an (zwischen 10 und 100)");
        if (Number.isNaN(parseInt(n)) || parseInt(n) < 10 || parseInt(n) > 100) {
            alert("Fehler - Eingabe falsch - bitte eine Zahl zwischen 10 und 100 eingeben");
            input();
        }
        else {
            for (let i = 0; i < parseInt(n); i++) {
                init(Math.random() * window.innerWidth - 100, Math.random() * window.innerHeight - 100, Math.random() * 360);
            }
        }
    }
    function init(x, y, color) {
        let div = document.createElement("div");
        div.style.width = "15px";
        div.style.height = "15px";
        div.style.backgroundColor = "hsl(" + color + ", 60%, 65%)";
        div.style.left = x + "px";
        div.style.top = y + "px";
        document.body.appendChild(div);
    }
})(Aufg_8 || (Aufg_8 = {}));
//# sourceMappingURL=dynhtml.js.map