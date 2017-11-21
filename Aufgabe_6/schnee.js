/*
Aufgabe: Nr. 6 -
Name: Priska Maier
Matrikel: 256326
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_6;
(function (Aufg_6) {
    class Snow extends Aufg_6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 610) {
                this.y = 0;
            }
            this.y += 15 + Math.round(Math.random() * 6);
            this.draw();
        }
        draw() {
            Aufg_6.crc.beginPath();
            Aufg_6.crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Aufg_6.crc.fillStyle = "#ffffff";
            Aufg_6.crc.fill();
            Aufg_6.crc.lineWidth = .3;
            Aufg_6.crc.strokeStyle = "#707070";
            Aufg_6.crc.stroke();
        }
    }
    Aufg_6.Snow = Snow;
})(Aufg_6 || (Aufg_6 = {}));
//# sourceMappingURL=schnee.js.map