/*
Aufgabe: Nr. 6 -
Name: Priska Maier
Matrikel: 256326
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_6;
(function (Aufg_6) {
    class Skiers extends Aufg_6.MovingObjects {
        constructor(_x, _y, _m_x, _m_y, _colorHead, _colorBody) {
            super(_x, _y);
            this.m_x = _m_x;
            this.m_y = _m_y;
            this.colorHead = _colorHead;
            this.colorBody = _colorBody;
        }
        move() {
            if (this.x > 820) {
                this.x = Math.random() * 200 - 300;
                this.y = Math.random() * 300 - 200;
                this.colorBody = "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            }
            this.x += this.m_x;
            this.y += this.m_y;
            this.draw();
        }
        draw() {
            //kopf
            Aufg_6.crc.beginPath();
            Aufg_6.crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Aufg_6.crc.fillStyle = this.colorHead;
            Aufg_6.crc.fill();
            //k�rper
            Aufg_6.crc.beginPath();
            Aufg_6.crc.moveTo(this.x - 10, this.y + 2);
            Aufg_6.crc.lineTo(this.x, this.y + 8);
            Aufg_6.crc.lineTo(this.x - 15, this.y + 30);
            Aufg_6.crc.lineTo(this.x - 26, this.y + 22);
            Aufg_6.crc.fillStyle = this.colorBody;
            Aufg_6.crc.fill();
            //ski
            Aufg_6.crc.beginPath();
            Aufg_6.crc.moveTo(this.x - 37, this.y + 25);
            Aufg_6.crc.lineTo(this.x - 10, this.y + 42);
            Aufg_6.crc.lineTo(this.x - 6, this.y + 43);
            Aufg_6.crc.lineWidth = 2.5;
            Aufg_6.crc.lineCap = "round";
            Aufg_6.crc.strokeStyle = "#000000";
            Aufg_6.crc.stroke();
            //skistock
            Aufg_6.crc.beginPath();
            Aufg_6.crc.moveTo(this.x - 2, this.y + 16);
            Aufg_6.crc.lineTo(this.x - 38, this.y + 12);
            Aufg_6.crc.lineWidth = 1.5;
            Aufg_6.crc.lineCap = "round";
            Aufg_6.crc.strokeStyle = "#000000";
            Aufg_6.crc.stroke();
        }
    }
    Aufg_6.Skiers = Skiers;
})(Aufg_6 || (Aufg_6 = {}));
//# sourceMappingURL=skifahrer.js.map