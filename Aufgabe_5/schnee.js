/*
Aufgabe: Nr. 5 - Objektorientierte Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_5;
(function (Aufg_5) {
    class Snow {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        moveSnow() {
            if (this.y > 610) {
                this.y = 0;
            }
            this.y += 15 + Math.round(Math.random() * 6);
            this.drawSnow();
        }
        drawSnow() {
            Aufg_5.crc.beginPath();
            Aufg_5.crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Aufg_5.crc.fillStyle = "#ffffff";
            Aufg_5.crc.fill();
            Aufg_5.crc.lineWidth = .3;
            Aufg_5.crc.strokeStyle = "#707070";
            Aufg_5.crc.stroke();
        }
    }
    Aufg_5.Snow = Snow;
})(Aufg_5 || (Aufg_5 = {}));
//# sourceMappingURL=schnee.js.map