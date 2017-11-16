/*
Aufgabe: Nr. 5 - Objektorientierte Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_5;
(function (Aufg_5) {
    window.addEventListener("load", init);
    let imagedata;
    let runningSkiers = [];
    let passingClouds = [];
    let fallingSnow = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufg_5.crc = canvas.getContext("2d");
        //himmel
        Aufg_5.crc.fillStyle = "#b2dfee";
        Aufg_5.crc.fillRect(0, 0, 800, 600);
        //rechteck: x, y, breite, h�he
        //berge (hintergrund)
        Aufg_5.crc.beginPath();
        Aufg_5.crc.moveTo(350, 550);
        Aufg_5.crc.lineTo(550, 200);
        Aufg_5.crc.lineTo(650, 350);
        Aufg_5.crc.lineTo(650, 550);
        Aufg_5.crc.closePath();
        Aufg_5.crc.fillStyle = "#9e9e9e";
        Aufg_5.crc.fill();
        Aufg_5.crc.beginPath();
        Aufg_5.crc.moveTo(500, 600);
        Aufg_5.crc.lineTo(700, 250);
        Aufg_5.crc.lineTo(800, 400);
        Aufg_5.crc.lineTo(800, 600);
        Aufg_5.crc.closePath();
        Aufg_5.crc.fillStyle = "#b0b0b0";
        Aufg_5.crc.fill();
        //sonne
        Aufg_5.crc.beginPath();
        Aufg_5.crc.arc(680, 100, 45, 0, 2 * Math.PI);
        Aufg_5.crc.fillStyle = "#ffd700";
        Aufg_5.crc.fill();
        //kreis: x, y (mittelpunkt), radius, startwinkel, endwinkel, uhrzeigersinn
        // piste
        Aufg_5.crc.beginPath();
        Aufg_5.crc.moveTo(60, 0);
        Aufg_5.crc.lineTo(800, 550);
        Aufg_5.crc.lineTo(800, 600);
        Aufg_5.crc.lineTo(0, 600);
        Aufg_5.crc.lineTo(0, 0);
        Aufg_5.crc.closePath();
        Aufg_5.crc.fillStyle = "#f2f2f2";
        Aufg_5.crc.fill();
        //generierte b�ume
        for (let i = 0; i <= 5; i++) {
            let x = 20 + Math.random() * 200;
            let y = 100 + Math.random() * 350;
            drawTree(x, y, "#548d68");
        }
        for (let i = 0; i <= 7; i++) {
            let x = 180 + Math.random() * 450;
            let y = 370 + Math.random() * 250;
            drawTree(x, y, "#5a924f");
        }
        //skilift
        Aufg_5.crc.beginPath();
        Aufg_5.crc.moveTo(0, 240);
        Aufg_5.crc.lineTo(460, 600);
        Aufg_5.crc.lineWidth = 1.5;
        Aufg_5.crc.strokeStyle = "#262626";
        Aufg_5.crc.stroke();
        Aufg_5.crc.beginPath();
        Aufg_5.crc.moveTo(0, 250);
        Aufg_5.crc.lineTo(450, 600);
        Aufg_5.crc.lineWidth = 1.5;
        Aufg_5.crc.strokeStyle = "#262626";
        Aufg_5.crc.stroke();
        imagedata = Aufg_5.crc.getImageData(0, 0, canvas.width, canvas.height);
        //skifahrer
        for (let i = 0; i < 8; i++) {
            runningSkiers[i] = new Aufg_5.Skiers(Math.random() * 200 - 300, Math.random() * 300 - 200, Math.random() * 3 + 22, Math.random() * 3 + 18, "hsl(20, 50%, 80%)", "hsl(" + Math.random() * 360 + ", 45%, 65%)");
        }
        //wolken
        for (let i = 0; i < 6; i++) {
            passingClouds[i] = new Aufg_5.Clouds(10 + Math.random() * 800, 20 + Math.random() * 200);
        }
        //schnee
        for (let i = 0; i < 160; i++) {
            fallingSnow[i] = new Aufg_5.Snow(Math.random() * 800, Math.random() * 600);
        }
        animate();
    } /* init */
    //b�ume
    function drawTree(x, y, color) {
        Aufg_5.crc.fillStyle = "#8b5a2b";
        Aufg_5.crc.fillRect(x - 6, y + 60, 12, 15);
        Aufg_5.crc.beginPath();
        Aufg_5.crc.moveTo(x, y);
        Aufg_5.crc.lineTo(x + 25, y + 40);
        Aufg_5.crc.lineTo(x - 25, y + 40);
        Aufg_5.crc.closePath();
        Aufg_5.crc.fillStyle = color;
        Aufg_5.crc.fill();
        Aufg_5.crc.beginPath();
        Aufg_5.crc.moveTo(x, y + 10);
        Aufg_5.crc.lineTo(x + 25, y + 60);
        Aufg_5.crc.lineTo(x - 25, y + 60);
        Aufg_5.crc.closePath();
        Aufg_5.crc.fillStyle = color;
        Aufg_5.crc.fill();
    }
    function randomTrees() {
        //feste b�ume
        drawTree(120, 460, "#5a924f");
        drawTree(240, 250, "#5a924f");
        drawTree(50, 120, "#548d68");
        drawTree(550, 500, "#548d68");
        drawTree(420, 350, "#548d68");
    }
    function animate() {
        console.log("animation");
        Aufg_5.crc.putImageData(imagedata, 0, 0);
        for (let i = 0; i < runningSkiers.length; i++) {
            let sk = runningSkiers[i];
            sk.moveSkier();
        }
        for (let i = 0; i < passingClouds.length; i++) {
            let c = passingClouds[i];
            c.moveCloud();
        }
        for (let i = 0; i < fallingSnow.length; i++) {
            let sn = fallingSnow[i];
            sn.moveSnow();
        }
        window.setTimeout(animate, 90);
        randomTrees();
    }
})(Aufg_5 || (Aufg_5 = {})); /* namespace */
//# sourceMappingURL=canvas_5_main.js.map