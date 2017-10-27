/*
Aufgabe: Nr. 3 - Schneegest�ber
Name: Priska Maier
Matrikel: 256326
Datum: 25.10.17
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
//http://jsfiddle.net/L4Qfb/21/
var Aufg_3;
(function (Aufg_3) {
    window.addEventListener("load", init);
    let crc;
    let imagedata;
    let arrayX = [];
    let arrayY = [];
    let fallingSnowX = [];
    let fallingSnowY = [];
    let passingCloudsX = [];
    let passingCloudsY = [];
    let runningSkiersX = [];
    let runningSkiersY = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        //himmel
        crc.fillStyle = "#b2dfee";
        crc.fillRect(0, 0, 800, 600);
        //rechteck: x, y, breite, h�he
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
        crc.arc(680, 100, 45, 0, 2 * Math.PI);
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
        //feste b�ume
        drawTree(120, 460, "#5a924f");
        drawTree(240, 250, "#5a924f");
        drawTree(50, 120, "#548d68");
        drawTree(550, 500, "#548d68");
        drawTree(420, 350, "#548d68");
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
        for (let i = 0; i < 100; i++) {
            arrayX[i] = 10;
            arrayY[i] = 100;
        }
        for (let i = 0; i < 1; i++) {
            runningSkiersX[i] = 0;
            runningSkiersY[i] = 20 + Math.random() * 20;
        }
        for (let i = 0; i < 6; i++) {
            passingCloudsX[i] = 10 + Math.random() * 800;
            passingCloudsY[i] = 20 + Math.random() * 200;
        }
        for (let i = 0; i < 160; i++) {
            fallingSnowX[i] = Math.random() * 800;
            fallingSnowY[i] = Math.random() * 600;
        }
        animate();
    } /* init */
    function drawTree(x, y, color) {
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
    //wolken
    function drawCloud(x, y) {
        crc.beginPath();
        crc.arc(x, y, 30, 0, Math.PI, true);
        crc.arc(x - 55, y, 30, 0, Math.PI, true);
        crc.fillStyle = "#ffffff";
        crc.fill();
        crc.arc(x - 28, y - 17, 25, 0, Math.PI, true);
        crc.fillStyle = "#ffffff";
        crc.fill();
    }
    //schneeflocken
    function drawSnow(x, y) {
        crc.beginPath();
        crc.arc(x, y, 5, 0, 2 * Math.PI);
        crc.fillStyle = "#ffffff";
        crc.fill();
        crc.lineWidth = .3;
        crc.strokeStyle = "#707070";
        crc.stroke();
    }
    //skifahrer
    function drawSkier(x, y) {
        //kopf
        crc.beginPath();
        crc.arc(x, y, 6, 0, 2 * Math.PI);
        crc.fillStyle = "#ffe4e1";
        crc.fill();
        //k�rper
        crc.beginPath();
        crc.moveTo(x - 12, y + 2);
        crc.lineTo(x, y + 10);
        crc.lineTo(x - 15, y + 30);
        crc.lineTo(x - 30, y + 24);
        crc.fillStyle = "#cd3333";
        crc.fill();
        //ski
        crc.beginPath();
        crc.moveTo(x - 42, y + 22);
        crc.lineTo(x, y + 40);
        crc.lineTo(x + 6, y + 40);
        crc.lineWidth = 2.8;
        crc.lineCap = "round";
        crc.stroke();
        //skistock
        crc.beginPath();
        crc.moveTo(x, y + 18);
        crc.lineTo(x - 40, y + 15);
        crc.lineWidth = 1.8;
        crc.lineCap = "round";
        crc.stroke();
    }
    function animate() {
        console.log("animation");
        crc.putImageData(imagedata, 0, 0);
        //skifahrer
        for (let i = 0; i < runningSkiersX.length; i++) {
            if (runningSkiersX[i] > 830) {
                runningSkiersX[i] = 0;
                runningSkiersY[i] = 20;
            }
            runningSkiersX[i] += 15;
            runningSkiersY[i] += 10;
            drawSkier(runningSkiersX[i], runningSkiersY[i]);
        }
        //wolken
        for (let i = 0; i < passingCloudsX.length; i++) {
            if (passingCloudsX[i] > 900) {
                passingCloudsX[i] = 0;
            }
            passingCloudsX[i] += 6;
            drawCloud(passingCloudsX[i], passingCloudsY[i]);
        }
        //schnee
        for (let i = 0; i < fallingSnowX.length; i++) {
            if (fallingSnowY[i] > 610) {
                fallingSnowY[i] = 0;
            }
            fallingSnowY[i] += 15;
            drawSnow(fallingSnowX[i], fallingSnowY[i]);
        }
        window.setTimeout(animate, 110);
    }
})(Aufg_3 || (Aufg_3 = {})); /* namespace */
//# sourceMappingURL=canvas_3.js.map