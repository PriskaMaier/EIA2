/*
Aufgabe: Nr. 6 - 
Name: Priska Maier
Matrikel: 256326
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufg_6    {
    
    export class Snow extends MovingObjects {
    
        constructor (_x: number, _y: number) {
            super(_x, _y);
        }
        
        move(): void {

            if (this.y > 610) {
                this.y = 0;
            }

            this.y += 15 + Math.round(Math.random() * 6);

            this.draw();
        }
        
        draw() : void {
            crc.beginPath();
            crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc.fillStyle = "#ffffff";
            crc.fill();
            crc.lineWidth = .3;
            crc.strokeStyle = "#707070";
            crc.stroke();
        }
        
    }       
}