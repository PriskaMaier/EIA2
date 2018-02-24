/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Endaufgabe;
(function (Endaufgabe) {
    class Heartpiece extends Endaufgabe.Objects {
        constructor(_x, _y, _dy) {
            super(_x, _y);
            this.dy = _dy;
        }
        draw() {
            //wei�es herz au�en 625, 200
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x, this.y);
            Endaufgabe.crc.lineTo(this.x + 40, this.y - 40);
            Endaufgabe.crc.bezierCurveTo(this.x + 50, this.y - 60, this.x + 30, this.y - 90, this.x, this.y - 55);
            Endaufgabe.crc.moveTo(this.x - 40, this.y - 40);
            Endaufgabe.crc.bezierCurveTo(this.x - 50, this.y - 60, this.x - 30, this.y - 90, this.x, this.y - 55);
            Endaufgabe.crc.lineTo(this.x, this.y);
            Endaufgabe.crc.moveTo(this.x - 40, this.y - 40);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.fillStyle = "#f0e4dd";
            Endaufgabe.crc.fill();
            //rotes herz innen
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x, this.y - 10);
            Endaufgabe.crc.lineTo(this.x + 30, this.y - 40);
            Endaufgabe.crc.bezierCurveTo(this.x + 50, this.y - 60, this.x + 20, this.y - 80, this.x, this.y - 45);
            Endaufgabe.crc.moveTo(this.x - 30, this.y - 40);
            Endaufgabe.crc.bezierCurveTo(this.x - 50, this.y - 60, this.x - 20, this.y - 80, this.x, this.y - 45);
            Endaufgabe.crc.lineTo(this.x, this.y - 10);
            Endaufgabe.crc.moveTo(this.x - 30, this.y - 20);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.fillStyle = "#e63c2d";
            Endaufgabe.crc.fill();
        }
    }
    Endaufgabe.Heartpiece = Heartpiece;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=heartpiece.js.map