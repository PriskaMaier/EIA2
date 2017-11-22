/*
Aufgabe: Nr. 6 - Polymorphe Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 22.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_6;
(function (Aufg_6) {
    class Clouds extends Aufg_6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.x > 900) {
                this.x = 0;
            }
            this.x += 6;
            this.draw();
        }
        draw() {
            Aufg_6.crc.beginPath();
            Aufg_6.crc.arc(this.x, this.y, 30, 0, Math.PI, true);
            Aufg_6.crc.arc(this.x - 55, this.y, 30, 0, Math.PI, true);
            Aufg_6.crc.fillStyle = "#ffffff";
            Aufg_6.crc.fill();
            Aufg_6.crc.arc(this.x - 28, this.y - 17, 25, 0, Math.PI, true);
            Aufg_6.crc.fillStyle = "#ffffff";
            Aufg_6.crc.fill();
        }
    }
    Aufg_6.Clouds = Clouds;
})(Aufg_6 || (Aufg_6 = {}));
//# sourceMappingURL=wolken.js.map