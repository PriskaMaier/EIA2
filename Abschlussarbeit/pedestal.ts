/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Endaufgabe    {
    
    export class Pedestal extends Objects   {
           
        constructor (_x : number, _y : number)  {
            super(_x, _y);
        }
        
        draw() : void   {
            //oben
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.lineTo(this.x + 80, this.y + 20);
            crc.lineTo(this.x + 300, this.y + 20);
            crc.lineTo(this.x + 380, this.y);
            crc.lineTo(this.x + 340, this.y - 15);
            crc.lineTo(this.x + 40, this.y - 15);
            crc.closePath();
            crc.fillStyle = "#7a6047";
            crc.fill();
            
            //unten links
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.lineTo(this.x - 65, this.y + 75);
            crc.lineTo(this.x + 50, this.y + 120);
            crc.lineTo(this.x + 80, this.y + 20);
            crc.closePath();
            crc.fillStyle = "#765d45";
            crc.fill();
            
            //unten mitte
            crc.beginPath();
            crc.moveTo(this.x + 80, this.y + 20);
            crc.lineTo(this.x + 50, this.y + 120);
            crc.lineTo(this.x + 330, this.y + 120);
            crc.lineTo(this.x + 300, this.y + 20);
            crc.closePath();
            crc.fillStyle = "#705942";
            crc.fill();
            
            //unten rechts
            crc.beginPath();
            crc.moveTo(this.x + 300, this.y + 20);
            crc.lineTo(this.x + 330, this.y + 120);
            crc.lineTo(this.x + 435, this.y + 75);
            crc.lineTo(this.x + 380, this.y);
            crc.closePath();
            crc.fillStyle = "#765d45";
            crc.fill();
        }    
    }
}