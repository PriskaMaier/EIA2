/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Endaufgabe    {
    
    export class Chest extends Objects   {
           
        constructor (_x : number, _y : number)  {
            super(_x, _y);
        }
        
        draw() : void   {   //zeichnet nur untere haelfte
            //untere haelfte

                //oberer (weiﬂer) rand
                crc.fillStyle = "#c8bfb8";
                crc.fillRect(this.x, this.y, 200, 35);
            
                //innen (blauschwarz)
                crc.fillStyle = "#222c3c";
                crc.fillRect(this.x + 8, this.y + 5, 184, 22);
            
                //auﬂen (braun)
                crc.fillStyle = "#8e694c";
                crc.fillRect(this.x, this.y + 35, 200, 65);
            
                //unterer (goldener) rand
                crc.beginPath();
                crc.moveTo(this.x + 9, this.y + 35);
                crc.lineTo(this.x + 9, this.y + 94);
                crc.lineTo(this.x + 191, this.y + 94);
                crc.lineTo(this.x + 191, this.y + 35);
                crc.lineWidth = 18;
                crc.lineCap = "butt";
                crc.strokeStyle = "#f2db59";
                crc.stroke();
            
                //schloss und schl¸sselloch
                crc.beginPath();
                crc.arc(this.x + 100, this.y + 50, 20, 0, Math.PI);
                crc.fillStyle = "#f2db59";
                crc.fill();
                crc.fillRect(this.x + 80, this.y + 35, 40, 15);
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 100, this.y + 48, 7, 0, 2 * Math.PI);
                crc.fillStyle = "#000000";
                crc.fill();
                crc.closePath();
                crc.beginPath();
                crc.moveTo(this.x + 98, this.y + 50);
                crc.lineTo(this.x + 94, this.y + 60);
                crc.lineTo(this.x + 106, this.y + 60);
                crc.lineTo(this.x + 102, this.y + 50);
                crc.fill();
                crc.closePath();
            
                //nieten unten
                crc.beginPath();
                crc.arc(this.x + 50, this.y + 55, 8, 0, 2 * Math.PI);
                crc.fillStyle = "#8f8c86";
                crc.fill();
                crc.closePath();
                
                crc.beginPath();
                crc.arc(this.x + 50, this.y + 55, 8, 0, Math.PI, true)
                crc.fillStyle = "#afaca4";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 150, this.y + 55, 8, 0, 2 * Math.PI);
                crc.fillStyle = "#8f8c86";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 150, this.y + 55, 8, 0, Math.PI, true)
                crc.fillStyle = "#afaca4";
                crc.fill();
                crc.closePath();
        }
        
        drawUpperPartClosed() : void    {
            //obere haelfte
            
                //basis auﬂen (braun)
                crc.fillStyle = "#8e694c";
                crc.fillRect(this.x, this.y - 45, 200, 78);
                crc.beginPath();
                crc.moveTo(this.x, this.y + 34);
                crc.lineTo(this.x + 200, this.y + 34);
                crc.lineWidth = 2;
                crc.strokeStyle = "#3c3938";
                crc.stroke();
                
                //goldener rand
                crc.beginPath();
                crc.moveTo(this.x + 9, this.y - 45);
                crc.lineTo(this.x + 9, this.y + 24);
                crc.lineTo(this.x + 191, this.y + 24);
                crc.lineTo(this.x + 191, this.y - 45);
                crc.moveTo(this.x + 100, this.y - 45);
                crc.lineTo(this.x + 100, this.y + 24);
                crc.lineWidth = 18;
                crc.lineCap = "butt";
                crc.strokeStyle = "#f2db59";
                crc.stroke();
            
                //schloss
                crc.beginPath();
                crc.arc(this.x + 100, this.y + 50, 20, 0, Math.PI);
                crc.fillStyle = "#f2db59";
                crc.fill();
                crc.fillRect(this.x + 80, this.y + 32, 40, 18);
                crc.closePath();

                crc.beginPath();
                crc.arc(this.x + 100, this.y + 48, 7, 0, 2 * Math.PI);
                crc.fillStyle = "#000000";
                crc.fill();
                crc.closePath();
                crc.beginPath();
                crc.moveTo(this.x + 98, this.y + 50);
                crc.lineTo(this.x + 94, this.y + 60);
                crc.lineTo(this.x + 106, this.y + 60);
                crc.lineTo(this.x + 102, this.y + 50);
                crc.fill();
                crc.closePath();
                
                //nieten oben
                crc.beginPath();
                crc.arc(this.x + 50, this.y - 2, 8, 0, 2 * Math.PI);
                crc.fillStyle = "#8f8c86";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 50, this.y - 2, 8, 0, Math.PI, true)
                crc.fillStyle = "#afaca4";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 150, this.y - 2, 8, 0, 2 * Math.PI);
                crc.fillStyle = "#8f8c86";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 150, this.y - 2, 8, 0, Math.PI, true)
                crc.fillStyle = "#afaca4";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 50, this.y - 35, 8, 0, 2 * Math.PI);
                crc.fillStyle = "#8f8c86";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 50, this.y - 35, 8, 0, Math.PI, true)
                crc.fillStyle = "#afaca4";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 150, this.y - 35, 8, 0, 2 * Math.PI);
                crc.fillStyle = "#8f8c86";
                crc.fill();
                crc.closePath();
            
                crc.beginPath();
                crc.arc(this.x + 150, this.y - 35, 8, 0, Math.PI, true)
                crc.fillStyle = "#afaca4";
                crc.fill();
                crc.closePath();
        }
        
        drawUpperPartOpened() : void    {
            //oberer (weiﬂer) rand
            crc.fillStyle = "#b3ada7";
            crc.fillRect(this.x, this.y - 70, 200, 69);

            //innen (blauschwarz)
            crc.fillStyle = "#2f2e2c";
            crc.fillRect(this.x + 8, this.y - 65, 184, 55);
            crc.fillStyle = "#222c3c";
            crc.fillRect(this.x + 8, this.y - 40, 184, 30);
            
            //schloss
            crc.beginPath();
            crc.arc(this.x + 100, this.y - 75, 20, 0, Math.PI, true);
            crc.fillStyle = "#d6c14f";
            crc.fill();
            crc.fillRect(this.x + 80, this.y - 77, 40, 8);
            crc.closePath();
        }
        
    }
}





















