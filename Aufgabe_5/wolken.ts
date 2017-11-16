/*
Aufgabe: Nr. 5 - Objektorientierte Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufg_5    {
    
    export class Clouds {
        x : number;
        y : number
    
        constructor (_x: number, _y: number) {
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
            crc.beginPath();
            crc.arc(this.x, this.y, 30, 0, Math.PI, true);
            crc.arc(this.x - 55, this.y, 30, 0, Math.PI, true);
            crc.fillStyle = "#ffffff";
            crc.fill();
            crc.arc(this.x - 28, this.y - 17, 25, 0, Math.PI, true);
            crc.fillStyle = "#ffffff";
            crc.fill();
        }
        
    }
}