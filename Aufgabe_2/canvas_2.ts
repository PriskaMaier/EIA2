/*
Aufgabe: Nr. 2 - Skipiste mit Funktionen
Name: Priska Maier
Matrikel: 256326
Datum: 18.10.17
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
 
namespace Aufg_2    {
    
    window.addEventListener("load", init);
    
    let crc : CanvasRenderingContext2D;
    
    function init () : void {
        
        let canvas : HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        
        //himmel
        crc.fillStyle = "#b2dfee";
        crc.fillRect(0, 0, 800, 600);
        
        //rechteck: x, y, breite, höhe
        
        //berge (hintergrund)
        crc.beginPath();
        crc.moveTo(350, 550);
        crc.lineTo(550, 200);
        crc.lineTo(650, 350);
        crc.lineTo(650, 550);
        crc.closePath();
        crc.fillStyle = "#9e9e9e";
        crc.fill();
        crc.beginPath();
        crc.moveTo(500, 600);
        crc.lineTo(700, 250);
        crc.lineTo(800, 400);
        crc.lineTo(800, 600);
        crc.closePath();
        crc.fillStyle = "#b0b0b0";
        crc.fill();
        
        // piste
        crc.beginPath();
        crc.moveTo(60, 0);
        crc.lineTo(800, 550);
        crc.lineTo(800, 600);
        crc.lineTo(0, 600);
        crc.lineTo(0, 0);
        crc.closePath();
        crc.fillStyle = "#f2f2f2";
        crc.fill();
        
        //sonne
        crc.beginPath();
        crc.arc(680, 100, 45, 0, 2*Math.PI);
        crc.fillStyle = "#ffd700";
        crc.fill();
        
        //kreis: x, y (mittelpunkt), radius, startwinkel, endwinkel, uhrzeigersinn
        
        //wolke 1 (rechts)
        crc.beginPath();
        crc.arc(540, 140, 30, 0, Math.PI, true);
        crc.arc(480, 140, 30, 0, Math.PI, true);
        crc.fillStyle = "#ffffff";
        crc.fill();
        crc.arc(510, 123, 25, 0, Math.PI, true);
        crc.fillStyle = "#ffffff";
        crc.fill();
        
        //wolke 2 (links)
        crc.beginPath();
        crc.arc(350, 80, 30, 0, Math.PI, true);
        crc.arc(290, 80, 30, 0, Math.PI, true);
        crc.fillStyle = "#ffffff";
        crc.fill();
        crc.arc(320, 63, 25, 0, Math.PI, true);
        crc.fillStyle = "#ffffff";
        crc.fill();
        
        //feste bäume
        drawTree(120, 460, "#5a924f");
        drawTree(240, 250, "#5a924f");
        drawTree(50, 120, "#548d68");
        drawTree(550, 500, "#548d68");
        drawTree(420, 350, "#548d68");
        
        //generierte bäume
        for (let i: number = 0; i <= 5; i++) {
            let x: number = 20 + Math.random() * 200;
            let y: number = 100 + Math.random() * 350;
            drawTree(x, y, "#548d68");
        }
        
        for (let i: number = 0; i <= 7; i++) {
            let x: number = 180 + Math.random() * 450;
            let y: number = 370 + Math.random() * 250;
            drawTree(x, y, "#5a924f");
        }
        
        //schneeflocken
        for (let i: number = 0; i <= 40; i++) {
            let x: number = Math.random() * 800;
            let y: number = Math.random() * 600;
            drawSnow(x, y);
        }
        
        //skilift
        crc.beginPath();
        crc.moveTo(0, 240);
        crc.lineTo(460, 600);
        crc.lineWidth = 1.5;
        crc.strokeStyle = "#262626";
        crc.stroke();
        crc.beginPath();
        crc.moveTo(0, 250);
        crc.lineTo(450, 600);
        crc.lineWidth = 1.5;
        crc.strokeStyle = "#262626";
        crc.stroke();
        

    }   /* init */
    
    
    function drawTree (x : number, y : number, color : string) : void  {
        crc.fillStyle = "#8b5a2b";
        crc.fillRect(x - 6, y + 60, 12, 15);
        crc.beginPath();
        crc.moveTo(x, y);
        crc.lineTo(x + 25, y + 40);
        crc.lineTo(x - 25, y + 40);
        crc.closePath();
        crc.fillStyle = color;
        crc.fill();
        crc.beginPath();
        crc.moveTo(x, y + 10);
        crc.lineTo(x + 25, y + 60);
        crc.lineTo(x - 25, y + 60);
        crc.closePath();
        crc.fillStyle = color;
        crc.fill();
    }

    
    function drawSnow (x : number, y : number) : void   {
        crc.beginPath();
        crc.arc(x, y, 5, 0, 2 * Math.PI);
        crc.fillStyle = "#ffffff";
        crc.fill();
        crc.lineWidth = .3;
        crc.strokeStyle = "#707070";
        crc.stroke(); 
    }

    
}   /* namespace */
    
    
    
    
    
    
    
    
    
