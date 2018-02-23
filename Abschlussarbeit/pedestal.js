/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Endaufgabe;
(function (Endaufgabe) {
    class Pedestal extends Endaufgabe.Objects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            //oben
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x, this.y);
            Endaufgabe.crc.lineTo(this.x + 80, this.y + 20);
            Endaufgabe.crc.lineTo(this.x + 300, this.y + 20);
            Endaufgabe.crc.lineTo(this.x + 380, this.y);
            Endaufgabe.crc.lineTo(this.x + 340, this.y - 15);
            Endaufgabe.crc.lineTo(this.x + 40, this.y - 15);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.fillStyle = "#7a6047";
            Endaufgabe.crc.fill();
            //unten links
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x, this.y);
            Endaufgabe.crc.lineTo(this.x - 65, this.y + 75);
            Endaufgabe.crc.lineTo(this.x + 50, this.y + 120);
            Endaufgabe.crc.lineTo(this.x + 80, this.y + 20);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.fillStyle = "#765d45";
            Endaufgabe.crc.fill();
            //unten mitte
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 80, this.y + 20);
            Endaufgabe.crc.lineTo(this.x + 50, this.y + 120);
            Endaufgabe.crc.lineTo(this.x + 330, this.y + 120);
            Endaufgabe.crc.lineTo(this.x + 300, this.y + 20);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.fillStyle = "#705942";
            Endaufgabe.crc.fill();
            //unten rechts
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 300, this.y + 20);
            Endaufgabe.crc.lineTo(this.x + 330, this.y + 120);
            Endaufgabe.crc.lineTo(this.x + 435, this.y + 75);
            Endaufgabe.crc.lineTo(this.x + 380, this.y);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.fillStyle = "#765d45";
            Endaufgabe.crc.fill();
        }
    }
    Endaufgabe.Pedestal = Pedestal;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=pedestal.js.map