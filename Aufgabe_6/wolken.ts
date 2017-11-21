/*
Aufgabe: Nr. 6 - 
Name: Priska Maier
Matrikel: 256326
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufg_6    {
    
    export class Clouds extends MovingObjects {
    
        constructor (_x: number, _y: number) {
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