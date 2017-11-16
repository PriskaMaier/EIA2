/*
Aufgabe: Nr. 5 - Objektorientierte Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufg_5    {
    
    export class Snow {
        x : number;
        y : number
    
        constructor (_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        moveSnow(): void {

            if (this.y > 610) {
                this.y = 0;
            }

            this.y += 15 + Math.round(Math.random() * 6);

            this.drawSnow();
        }
        
        drawSnow() : void {
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