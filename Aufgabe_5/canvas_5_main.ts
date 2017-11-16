/*
Aufgabe: Nr. 5 - Objektorientierte Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

 
namespace Aufg_5    {
    
    export let crc : CanvasRenderingContext2D;
    
    
    window.addEventListener("load", init);
    
    let imagedata : ImageData;
    
    let runningSkiers : Skiers[] = [];
    let passingClouds : Clouds[] = [];
    let fallingSnow : Snow[] = [];
    
    
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
        
        //sonne
        crc.beginPath();
        crc.arc(680, 100, 45, 0, 2*Math.PI);
        crc.fillStyle = "#ffd700";
        crc.fill();
        
        //kreis: x, y (mittelpunkt), radius, startwinkel, endwinkel, uhrzeigersinn
        
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
        
        
        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);
        
        //skifahrer
        for (let i : number = 0; i < 8; i++)  {
            runningSkiers[i] = new Skiers (Math.random() * 200 - 300,
                                           Math.random() * 300 - 200,
                                           Math.random() * 3 + 22,
                                           Math.random() * 3 + 18,
                                           "hsl(20, 50%, 80%)",
                                           "hsl(" + Math.random() * 360 + ", 45%, 65%)");
        }
        
        //wolken
        for (let i : number = 0; i < 6; i++)  {
            passingClouds[i] = new Clouds (10 + Math.random() * 800,
                                           20 + Math.random() * 200);
        }
        
        //schnee
        for (let i : number = 0; i < 160; i++)  {
            fallingSnow[i] = new Snow (Math.random() * 800,
                                       Math.random() * 600);
        }
        
        animate();
        
    }   /* init */
    
    
    //bäume
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
    
    function randomTrees() : void  {
        //feste bäume
        drawTree(120, 460, "#5a924f");
        drawTree(240, 250, "#5a924f");
        drawTree(50, 120, "#548d68");
        drawTree(550, 500, "#548d68");
        drawTree(420, 350, "#548d68");
            
    }
    
    
    function animate() : void   {
        
        console.log("animation");
        crc.putImageData(imagedata, 0, 0);
        
        for (let i : number = 0; i < runningSkiers.length; i++) {
            let sk : Skiers = runningSkiers[i];
            sk.moveSkier();
        }
        
        for (let i : number = 0; i < passingClouds.length; i++) {
            let c : Clouds = passingClouds[i];
            c.moveCloud();
        }

        for (let i : number = 0; i < fallingSnow.length; i++) {
            let sn : Snow = fallingSnow[i];
            sn.moveSnow();
        }
        
        
        window.setTimeout(animate, 90);
        
        randomTrees();   
    }

    
}   /* namespace */
    
    
    
    
    
    
    

    
