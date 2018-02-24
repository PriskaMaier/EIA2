/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Endaufgabe;
(function (Endaufgabe) {
    class Torch extends Endaufgabe.Objects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            //standbeine
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x, this.y);
            Endaufgabe.crc.lineTo(this.x + 110, this.y + 330);
            Endaufgabe.crc.moveTo(this.x + 110, this.y);
            Endaufgabe.crc.lineTo(this.x, this.y + 330);
            Endaufgabe.crc.moveTo(this.x + 55, this.y + 10);
            Endaufgabe.crc.lineTo(this.x + 55, this.y + 315);
            Endaufgabe.crc.lineWidth = 7.5;
            Endaufgabe.crc.lineCap = "round";
            Endaufgabe.crc.strokeStyle = "#4e3a29";
            Endaufgabe.crc.stroke();
            //seil
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 45, this.y + 155);
            Endaufgabe.crc.lineTo(this.x + 65, this.y + 155);
            Endaufgabe.crc.moveTo(this.x + 46, this.y + 160);
            Endaufgabe.crc.lineTo(this.x + 64, this.y + 160);
            Endaufgabe.crc.moveTo(this.x + 46, this.y + 165);
            Endaufgabe.crc.lineTo(this.x + 64, this.y + 165);
            Endaufgabe.crc.moveTo(this.x + 45, this.y + 170);
            Endaufgabe.crc.lineTo(this.x + 65, this.y + 170);
            Endaufgabe.crc.moveTo(this.x + 45, this.y + 175);
            Endaufgabe.crc.lineTo(this.x + 65, this.y + 175);
            Endaufgabe.crc.lineWidth = 5;
            Endaufgabe.crc.lineCap = "round";
            Endaufgabe.crc.strokeStyle = "#836d4b";
            Endaufgabe.crc.stroke();
        }
        drawFire() {
            //flamme
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 45, this.y + 40);
            Endaufgabe.crc.bezierCurveTo(this.x + 35, this.y + 30, this.x + 30, this.y + 30, this.x + 20, this.y + 10);
            Endaufgabe.crc.bezierCurveTo(this.x + 15, this.y - 12, this.x + 25, this.y - 10, this.x + 28, this.y - 20);
            Endaufgabe.crc.bezierCurveTo(this.x + 30, this.y - 20, this.x + 33, this.y - 35, this.x + 25, this.y - 50);
            Endaufgabe.crc.bezierCurveTo(this.x + 28, this.y - 52, this.x + 40, this.y - 58, this.x + 36, this.y - 30);
            Endaufgabe.crc.bezierCurveTo(this.x + 36, this.y - 28, this.x + 40, this.y, this.x + 60, this.y - 20);
            Endaufgabe.crc.bezierCurveTo(this.x + 63, this.y - 25, this.x + 75, this.y - 45, this.x + 60, this.y - 60);
            Endaufgabe.crc.bezierCurveTo(this.x + 58, this.y - 62, this.x + 50, this.y - 80, this.x + 70, this.y - 90);
            Endaufgabe.crc.bezierCurveTo(this.x + 72, this.y - 92, this.x + 75, this.y - 100, this.x + 65, this.y - 105);
            Endaufgabe.crc.bezierCurveTo(this.x + 67, this.y - 105, this.x + 88, this.y - 110, this.x + 82, this.y - 90);
            Endaufgabe.crc.bezierCurveTo(this.x + 80, this.y - 88, this.x + 70, this.y - 75, this.x + 85, this.y - 65);
            Endaufgabe.crc.bezierCurveTo(this.x + 90, this.y - 60, this.x + 120, this.y - 20, this.x + 70, this.y + 40);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.fillStyle = "#de5448";
            Endaufgabe.crc.fill();
            //licht
            Endaufgabe.crc.beginPath();
            var gradient = Endaufgabe.crc.createRadialGradient(this.x + 60, this.y - 60, 100, this.x + 60, this.y - 60, 130);
            gradient.addColorStop(.02, "rgba(243, 130, 89, 0.4)");
            gradient.addColorStop(.98, "rgba(0, 0, 0, 0.001)");
            Endaufgabe.crc.arc(this.x + 60, this.y - 60, 115, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = gradient;
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
        }
        drawBasket() {
            //rand oben
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x - 10, this.y - 40);
            Endaufgabe.crc.lineTo(this.x + 120, this.y - 40);
            Endaufgabe.crc.lineWidth = 11;
            Endaufgabe.crc.lineCap = "square";
            Endaufgabe.crc.strokeStyle = "#3a3835";
            Endaufgabe.crc.stroke();
            Endaufgabe.crc.closePath();
            //rundung ganz au�en drumherum
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.bezierCurveTo(this.x - 10, this.y - 40, this.x + 50, this.y + 140, this.x + 120, this.y - 40);
            Endaufgabe.crc.lineWidth = 4;
            Endaufgabe.crc.strokeStyle = "#3a3835";
            Endaufgabe.crc.stroke();
            Endaufgabe.crc.closePath();
            //endstueck
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.bezierCurveTo(this.x + 18, this.y + 25, this.x + 50, this.y + 90, this.x + 92, this.y + 25);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.fillStyle = "#3a3835";
            Endaufgabe.crc.fill();
            //innere rundungen
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.bezierCurveTo(this.x + 25, this.y - 40, this.x + 22, this.y - 20, this.x + 45, this.y + 30);
            Endaufgabe.crc.strokeStyle = "#3a3835";
            Endaufgabe.crc.stroke();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.bezierCurveTo(this.x + 85, this.y - 40, this.x + 88, this.y - 20, this.x + 65, this.y + 30);
            Endaufgabe.crc.strokeStyle = "#3a3835";
            Endaufgabe.crc.stroke();
            Endaufgabe.crc.closePath();
            //mittlere halterung
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 2, this.y - 5);
            Endaufgabe.crc.lineTo(this.x + 108, this.y - 5);
            Endaufgabe.crc.lineWidth = 7;
            Endaufgabe.crc.strokeStyle = "#3a3835";
            Endaufgabe.crc.stroke();
            Endaufgabe.crc.closePath();
        }
    }
    Endaufgabe.Torch = Torch;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=torch.js.map