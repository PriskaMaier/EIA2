/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Endaufgabe;
(function (Endaufgabe) {
    class Chest extends Endaufgabe.Objects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            //untere haelfte   490, 280
            //oberer (wei�er) rand
            Endaufgabe.crc.fillStyle = "#c8bfb8";
            Endaufgabe.crc.fillRect(this.x, this.y, 200, 35);
            //innen (blauschwarz)
            Endaufgabe.crc.fillStyle = "#222c3c";
            Endaufgabe.crc.fillRect(this.x + 8, this.y + 5, 184, 22);
            //au�en (braun)
            Endaufgabe.crc.fillStyle = "#8e694c";
            Endaufgabe.crc.fillRect(this.x, this.y + 35, 200, 65);
            //unterer (goldener) rand
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 9, this.y + 35);
            Endaufgabe.crc.lineTo(this.x + 9, this.y + 94);
            Endaufgabe.crc.lineTo(this.x + 191, this.y + 94);
            Endaufgabe.crc.lineTo(this.x + 191, this.y + 35);
            Endaufgabe.crc.lineWidth = 18;
            Endaufgabe.crc.lineCap = "butt";
            Endaufgabe.crc.strokeStyle = "#f2db59";
            Endaufgabe.crc.stroke();
            //schloss und schl�sselloch
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 100, this.y + 50, 20, 0, Math.PI);
            Endaufgabe.crc.fillStyle = "#f2db59";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.fillRect(this.x + 80, this.y + 35, 40, 15);
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 100, this.y + 48, 7, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = "#000000";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 98, this.y + 50);
            Endaufgabe.crc.lineTo(this.x + 94, this.y + 60);
            Endaufgabe.crc.lineTo(this.x + 106, this.y + 60);
            Endaufgabe.crc.lineTo(this.x + 102, this.y + 50);
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            //nieten unten
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 50, this.y + 55, 8, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = "#8f8c86";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 50, this.y + 55, 8, 0, Math.PI, true);
            Endaufgabe.crc.fillStyle = "#afaca4";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 150, this.y + 55, 8, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = "#8f8c86";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 150, this.y + 55, 8, 0, Math.PI, true);
            Endaufgabe.crc.fillStyle = "#afaca4";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
        }
        drawUpperPartClosed() {
            //obere haelfte    490, 280
            //basis au�en (braun)
            Endaufgabe.crc.fillStyle = "#8e694c";
            Endaufgabe.crc.fillRect(this.x, this.y - 45, 200, 78);
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x, this.y + 34);
            Endaufgabe.crc.lineTo(this.x + 200, this.y + 34);
            Endaufgabe.crc.lineWidth = 2;
            Endaufgabe.crc.strokeStyle = "#3c3938";
            Endaufgabe.crc.stroke();
            //goldener rand
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 9, this.y - 45);
            Endaufgabe.crc.lineTo(this.x + 9, this.y + 24);
            Endaufgabe.crc.lineTo(this.x + 191, this.y + 24);
            Endaufgabe.crc.lineTo(this.x + 191, this.y - 45);
            Endaufgabe.crc.moveTo(this.x + 100, this.y - 45);
            Endaufgabe.crc.lineTo(this.x + 100, this.y + 24);
            Endaufgabe.crc.lineWidth = 18;
            Endaufgabe.crc.lineCap = "butt";
            Endaufgabe.crc.strokeStyle = "#f2db59";
            Endaufgabe.crc.stroke();
            //schloss
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 100, this.y + 50, 20, 0, Math.PI);
            Endaufgabe.crc.fillStyle = "#f2db59";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.fillRect(this.x + 80, this.y + 32, 40, 18);
            Endaufgabe.crc.closePath();
            //eeeeiieeehhhh ?????
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 100, this.y + 48, 7, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = "#000000";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.moveTo(this.x + 98, this.y + 50);
            Endaufgabe.crc.lineTo(this.x + 94, this.y + 60);
            Endaufgabe.crc.lineTo(this.x + 106, this.y + 60);
            Endaufgabe.crc.lineTo(this.x + 102, this.y + 50);
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            //nieten oben
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 50, this.y - 2, 8, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = "#8f8c86";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 50, this.y - 2, 8, 0, Math.PI, true);
            Endaufgabe.crc.fillStyle = "#afaca4";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 150, this.y - 2, 8, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = "#8f8c86";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 150, this.y - 2, 8, 0, Math.PI, true);
            Endaufgabe.crc.fillStyle = "#afaca4";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 50, this.y - 35, 8, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = "#8f8c86";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 50, this.y - 35, 8, 0, Math.PI, true);
            Endaufgabe.crc.fillStyle = "#afaca4";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 150, this.y - 35, 8, 0, 2 * Math.PI);
            Endaufgabe.crc.fillStyle = "#8f8c86";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 150, this.y - 35, 8, 0, Math.PI, true);
            Endaufgabe.crc.fillStyle = "#afaca4";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.closePath();
        }
        drawUpperPartOpened() {
            //oberer (wei�er) rand
            Endaufgabe.crc.fillStyle = "#b3ada7";
            Endaufgabe.crc.fillRect(this.x, this.y - 70, 200, 69);
            //innen (blauschwarz)
            Endaufgabe.crc.fillStyle = "#2f2e2c";
            Endaufgabe.crc.fillRect(this.x + 8, this.y - 65, 184, 55);
            Endaufgabe.crc.fillStyle = "#222c3c";
            Endaufgabe.crc.fillRect(this.x + 8, this.y - 40, 184, 30);
            //schloss
            Endaufgabe.crc.beginPath();
            Endaufgabe.crc.arc(this.x + 100, this.y - 75, 20, 0, Math.PI, true);
            Endaufgabe.crc.fillStyle = "#d6c14f";
            Endaufgabe.crc.fill();
            Endaufgabe.crc.fillRect(this.x + 80, this.y - 77, 40, 8);
            Endaufgabe.crc.closePath();
        }
    }
    Endaufgabe.Chest = Chest;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=chest.js.map