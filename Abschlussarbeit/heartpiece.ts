/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Endaufgabe    {
    
    export class Heartpiece extends Objects   {
        dy : number
           
        constructor (_x : number, _y : number, _dy : number)  {
            super(_x, _y);
            this.dy = _dy;
        }
        
        draw() : void   {
            //weiﬂes herz auﬂen 625, 200
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.lineTo(this.x + 40, this.y - 40);
            crc.bezierCurveTo(this.x + 50, this.y - 60, this.x + 30, this.y - 90, this.x, this.y - 55);
            crc.moveTo(this.x - 40, this.y - 40);
            crc.bezierCurveTo(this.x - 50, this.y - 60, this.x - 30, this.y - 90, this.x, this.y - 55);
            crc.lineTo(this.x, this.y);
            crc.moveTo(this.x - 40, this.y - 40);
            crc.closePath();
            crc.fillStyle = "#f0e4dd"
            crc.fill();

            //rotes herz innen
            crc.beginPath();
            crc.moveTo(this.x, this.y - 10);
            crc.lineTo(this.x + 30, this.y - 40);
            crc.bezierCurveTo(this.x + 50, this.y - 60, this.x + 20, this.y - 80, this.x, this.y - 45);
            crc.moveTo(this.x - 30, this.y - 40);
            crc.bezierCurveTo(this.x - 50, this.y - 60, this.x - 20, this.y - 80, this.x, this.y - 45);
            crc.lineTo(this.x, this.y - 10);
            crc.moveTo(this.x - 30, this.y - 20);
            crc.closePath();
            crc.fillStyle = "#e63c2d"
            crc.fill();
        }
        
//        move() : void   {
//            for (let i : number = 0; i < 4; i++) {
//                this.y -= this.dy;
//            }
//            
//            this.draw();
//        }
    }
}













