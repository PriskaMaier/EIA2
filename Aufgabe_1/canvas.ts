/*
Aufgabe: Nr. 1 - Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 11.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */


window.addEventListener("load", init);

function init () : void {
    
    let canvas : HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    
    let crc : CanvasRenderingContext2D = canvas.getContext("2d");
    
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
    
    //baum   (unten links)
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(44, 557, 12, 23);
    crc.beginPath();
    crc.moveTo(50, 505);
    crc.lineTo(75, 545);
    crc.lineTo(25, 545);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(50, 515);
    crc.lineTo(75, 565);
    crc.lineTo(25, 565);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
    
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(124, 467, 12, 23);
    crc.beginPath();
    crc.moveTo(130, 415);
    crc.lineTo(155, 455);
    crc.lineTo(105, 455);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(130, 425);
    crc.lineTo(155, 475);
    crc.lineTo(105, 475);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
    
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(54, 127, 12, 23);
    crc.beginPath();
    crc.moveTo(60, 75);
    crc.lineTo(85, 115);
    crc.lineTo(35, 115);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(60, 85);
    crc.lineTo(85, 135);
    crc.lineTo(35, 135);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
    
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(44, 557, 12, 23);
    crc.beginPath();
    crc.moveTo(50, 505);
    crc.lineTo(75, 545);
    crc.lineTo(25, 545);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(50, 515);
    crc.lineTo(75, 565);
    crc.lineTo(25, 565);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
    
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(224, 227, 12, 23);
    crc.beginPath();
    crc.moveTo(230, 175);
    crc.lineTo(255, 215);
    crc.lineTo(205, 215);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(230, 185);
    crc.lineTo(255, 235);
    crc.lineTo(205, 235);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
    
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(234, 357, 12, 23);
    crc.beginPath();
    crc.moveTo(240, 305);
    crc.lineTo(265, 345);
    crc.lineTo(215, 345);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(240, 315);
    crc.lineTo(265, 365);
    crc.lineTo(215, 365);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
    
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(394, 357, 12, 23);
    crc.beginPath();
    crc.moveTo(400, 305);
    crc.lineTo(425, 345);
    crc.lineTo(375, 345);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(400, 315);
    crc.lineTo(425, 365);
    crc.lineTo(375, 365);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
    
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(554, 507, 12, 23);
    crc.beginPath();
    crc.moveTo(560, 455);
    crc.lineTo(585, 495);
    crc.lineTo(535, 495);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(560, 465);
    crc.lineTo(585, 515);
    crc.lineTo(535, 515);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
 
    
}









