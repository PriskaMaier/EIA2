/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Endaufgabe    {
    
    export class Torch extends Objects   {
           
        constructor (_x : number, _y : number)  {
            super(_x, _y);  
        }
        
        draw() : void   {   //zeichnet nur basis
            //standbeine
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.lineTo(this.x + 110, this.y + 330);
            crc.moveTo(this.x + 110, this.y);
            crc.lineTo(this.x, this.y + 330);
            crc.moveTo(this.x + 55, this.y + 10);
            crc.lineTo(this.x + 55, this.y + 315);
            crc.lineWidth = 7.5;
            crc.lineCap = "round";
            crc.strokeStyle = "#4e3a29";
            crc.stroke();
            
            //seil
            crc.beginPath();
            crc.moveTo(this.x + 45, this.y + 155);
            crc.lineTo(this.x + 65, this.y + 155);
            crc.moveTo(this.x + 46, this.y + 160);
            crc.lineTo(this.x + 64, this.y + 160);
            crc.moveTo(this.x + 46, this.y + 165);
            crc.lineTo(this.x + 64, this.y + 165);
            crc.moveTo(this.x + 45, this.y + 170);
            crc.lineTo(this.x + 65, this.y + 170);
            crc.moveTo(this.x + 45, this.y + 175);
            crc.lineTo(this.x + 65, this.y + 175);
            crc.lineWidth = 5;
            crc.lineCap = "round";
            crc.strokeStyle = "#836d4b";
            crc.stroke();
            
        }
        
        drawFire() : void   {
            
            //flamme
            crc.beginPath();
            crc.moveTo(this.x + 45, this.y + 40);
            crc.bezierCurveTo(this.x + 35, this.y + 30, this.x + 30, this.y + 30, this.x + 20, this.y + 10);
            crc.bezierCurveTo(this.x + 15, this.y - 12, this.x + 25, this.y - 10, this.x + 28, this.y - 20);
            crc.bezierCurveTo(this.x + 30, this.y - 20, this.x + 33, this.y - 35, this.x + 25, this.y - 50);
            crc.bezierCurveTo(this.x + 28, this.y - 52, this.x + 40, this.y - 58, this.x + 36, this.y - 30);
            crc.bezierCurveTo(this.x + 36, this.y - 28, this.x + 40, this.y, this.x + 60, this.y - 20);
            crc.bezierCurveTo(this.x + 63, this.y - 25, this.x + 75, this.y - 45, this.x + 60, this.y - 60);
            crc.bezierCurveTo(this.x + 58, this.y - 62, this.x + 50, this.y - 80, this.x + 70, this.y - 90);
            crc.bezierCurveTo(this.x + 72, this.y - 92, this.x + 75, this.y - 100, this.x + 65, this.y - 105);
            crc.bezierCurveTo(this.x + 67, this.y - 105, this.x + 88, this.y - 110, this.x + 82, this.y - 90);
            crc.bezierCurveTo(this.x + 80, this.y - 88, this.x + 70, this.y - 75, this.x + 85, this.y - 65);
            crc.bezierCurveTo(this.x + 90, this.y - 60, this.x + 120, this.y - 20, this.x + 70, this.y + 40);
            crc.closePath();
            crc.fillStyle = "#de5448";
            crc.fill();
            
            //licht
            crc.beginPath();
            var gradient = crc.createRadialGradient(this.x + 60, this.y - 60, 100, this.x + 60, this.y - 60, 130);
            gradient.addColorStop(.02, "rgba(243, 130, 89, 0.4)");
            gradient.addColorStop(.98, "rgba(0, 0, 0, 0.001)");
            crc.arc(this.x + 60, this.y - 60, 115, 0, 2 * Math.PI);
            crc.fillStyle = gradient;
            crc.fill();
            crc.closePath();
        }
        
        drawBasket() : void   {     //zeichnet halterungsschirm darauf
            //rand oben
            crc.beginPath();
            crc.moveTo(this.x - 10, this.y - 40);
            crc.lineTo(this.x + 120, this.y - 40);
            crc.lineWidth = 11;
            crc.lineCap = "square";
            crc.strokeStyle = "#3a3835";
            crc.stroke();
            crc.closePath();
            
            //rundung ganz auﬂen drumherum
            crc.beginPath();
            crc.bezierCurveTo(this.x - 10, this.y - 40, this.x + 50, this.y + 140, this.x + 120, this.y - 40);
            crc.lineWidth = 4;
            crc.strokeStyle = "#3a3835";
            crc.stroke();
            crc.closePath();
            
            //endstueck
            crc.beginPath();
            crc.bezierCurveTo(this.x + 18, this.y + 25, this.x + 50, this.y + 90, this.x + 92, this.y + 25);
            crc.closePath();
            crc.fillStyle = "#3a3835";
            crc.fill();
            
            //innere rundungen
            crc.beginPath();
            crc.bezierCurveTo(this.x + 25, this.y - 40, this.x + 22, this.y - 20, this.x + 45, this.y + 30);
            crc.strokeStyle = "#3a3835";
            crc.stroke();
            crc.beginPath();
            crc.bezierCurveTo(this.x + 85, this.y - 40, this.x + 88, this.y - 20, this.x + 65, this.y + 30);
            crc.strokeStyle = "#3a3835";
            crc.stroke();
            crc.closePath();
            
            //mittlere halterung
            crc.beginPath();
            crc.moveTo(this.x + 2, this.y - 5);
            crc.lineTo(this.x + 108, this.y - 5);
            crc.lineWidth = 7;
            crc.strokeStyle = "#3a3835";
            crc.stroke();
            crc.closePath();
        }
    }
}