/*
Aufgabe: Nr. 5 - Objektorientierte Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_5;
(function (Aufg_5) {
    class Clouds {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        moveCloud() {
            if (this.x > 900) {
                this.x = 0;
            }
            this.x += 6;
            this.drawCloud();
        }
        drawCloud() {
            Aufg_5.crc.beginPath();
            Aufg_5.crc.arc(this.x, this.y, 30, 0, Math.PI, true);
            Aufg_5.crc.arc(this.x - 55, this.y, 30, 0, Math.PI, true);
            Aufg_5.crc.fillStyle = "#ffffff";
            Aufg_5.crc.fill();
            Aufg_5.crc.arc(this.x - 28, this.y - 17, 25, 0, Math.PI, true);
            Aufg_5.crc.fillStyle = "#ffffff";
            Aufg_5.crc.fill();
        }
    }
    Aufg_5.Clouds = Clouds;
})(Aufg_5 || (Aufg_5 = {}));
//# sourceMappingURL=wolken.js.map