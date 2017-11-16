/*
Aufgabe: Nr. 5 - Objektorientierte Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_5;
(function (Aufg_5) {
    class Skiers {
        constructor(_x, _y, _m_x, _m_y, _colorHead, _colorBody) {
            this.x = _x;
            this.y = _y;
            this.m_x = _m_x;
            this.m_y = _m_y;
            this.colorHead = _colorHead;
            this.colorBody = _colorBody;
        }
        moveSkier() {
            if (this.x > 820) {
                this.x = Math.random() * 200 - 300;
                this.y = Math.random() * 300 - 200;
                this.colorBody = "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            }
            this.x += this.m_x;
            this.y += this.m_y;
            this.drawSkier();
        }
        drawSkier() {
            //kopf
            Aufg_5.crc.beginPath();
            Aufg_5.crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Aufg_5.crc.fillStyle = this.colorHead;
            Aufg_5.crc.fill();
            //k�rper
            Aufg_5.crc.beginPath();
            Aufg_5.crc.moveTo(this.x - 10, this.y + 2);
            Aufg_5.crc.lineTo(this.x, this.y + 8);
            Aufg_5.crc.lineTo(this.x - 15, this.y + 30);
            Aufg_5.crc.lineTo(this.x - 26, this.y + 22);
            Aufg_5.crc.fillStyle = this.colorBody;
            Aufg_5.crc.fill();
            //ski
            Aufg_5.crc.beginPath();
            Aufg_5.crc.moveTo(this.x - 37, this.y + 25);
            Aufg_5.crc.lineTo(this.x - 10, this.y + 42);
            Aufg_5.crc.lineTo(this.x - 6, this.y + 43);
            Aufg_5.crc.lineWidth = 2.5;
            Aufg_5.crc.lineCap = "round";
            Aufg_5.crc.strokeStyle = "#000000";
            Aufg_5.crc.stroke();
            //skistock
            Aufg_5.crc.beginPath();
            Aufg_5.crc.moveTo(this.x - 2, this.y + 16);
            Aufg_5.crc.lineTo(this.x - 38, this.y + 12);
            Aufg_5.crc.lineWidth = 1.5;
            Aufg_5.crc.lineCap = "round";
            Aufg_5.crc.strokeStyle = "#000000";
            Aufg_5.crc.stroke();
        }
    }
    Aufg_5.Skiers = Skiers;
})(Aufg_5 || (Aufg_5 = {}));
//# sourceMappingURL=skifahrer.js.map