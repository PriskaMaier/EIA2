/*
Aufgabe: Nr. 5 - Objektorientierte Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufg_5    {
    
    export class Skiers {
        x : number;
        y : number;
        m_x : number;
        m_y : number
        colorHead : string;
        colorBody : string
    
        constructor (_x : number, _y : number, _m_x : number, _m_y : number, _colorHead : string, _colorBody : string) {
            this.x = _x;
            this.y = _y;
            this.m_x = _m_x;
            this.m_y = _m_y;
            this.colorHead = _colorHead;
            this.colorBody = _colorBody;
        }
        
        moveSkier(): void {

            if (this.x > 820) {
                this.x = Math.random() * 200 - 300;
                this.y = Math.random() * 300 - 200;

                this.colorBody = "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            }

            this.x += this.m_x;
            this.y += this.m_y;

            this.drawSkier();
        }
        
        drawSkier() : void {
            //kopf
            crc.beginPath();
            crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc.fillStyle = this.colorHead;
            crc.fill();
            //körper
            crc.beginPath();
            crc.moveTo(this.x - 10, this.y + 2);
            crc.lineTo(this.x, this.y + 8);
            crc.lineTo(this.x - 15, this.y + 30);
            crc.lineTo(this.x - 26, this.y + 22);
            crc.fillStyle = this.colorBody;
            crc.fill();
            //ski
            crc.beginPath();
            crc.moveTo(this.x - 37, this.y + 25);
            crc.lineTo(this.x - 10, this.y + 42);
            crc.lineTo(this.x - 6, this.y + 43);
            crc.lineWidth = 2.5;
            crc.lineCap = "round";
            crc.strokeStyle = "#000000";
            crc.stroke();
            //skistock
            crc.beginPath();
            crc.moveTo(this.x - 2, this.y + 16);
            crc.lineTo(this.x - 38, this.y + 12);
            crc.lineWidth = 1.5;
            crc.lineCap = "round";
            crc.strokeStyle = "#000000";
            crc.stroke();
        }
    
    }
}








