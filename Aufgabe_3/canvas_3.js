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
        //wolken
        passingClouds = [Math.random() * 250 + 0 * 100 / (5 / 8),
            Math.random() * 250,
            Math.random() * 250 + 1 * 100 / (5 / 8),
            Math.random() * 250,
            Math.random() * 250 + 2 * 100 / (5 / 8),
            Math.random() * 250,
            Math.random() * 250 + 3 * 100 / (5 / 8),
            Math.random() * 250];
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
        //        drawSkier(400, 300);
        runningSkier = [0, 40];
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
        //schnee
        for (let i = 0; i < 160; i++) {
            fallingSnow.push(Math.random() * 800, Math.random() * 600);
        }
        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);
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
    //    function drawRandomCloud () : void   {
    //        for (let i: number = 0; i <= 5; i++) {
    //            let x: number = 10 + Math.random() * 800;
    //            let y: number = 20 + Math.random() * 200;
    //            drawCloud(x, y);
    //        }
    //    }
    //    
    //    function animateClouds() : void   {
    //        console.log("timeout animation - wolken");
    //        crc.putImageData(imagedata, 0, 0);
    //        
    //        for (let i : number = 0; i < x.length; i++)    {
    //            x[i] += 1;
    //        }
    //        
    //        window.setTimeout(animateClouds, 700);
    //    }
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
    let fallingSnow = [];
    let passingClouds = [];
    let runningSkier = [];
    function animate() {
        console.log("animation");
        crc.putImageData(imagedata, 0, 0);
        //skifahrer
        runningSkier[0] += 1.8 * 8;
        runningSkier[1] += 1.4 * 8;
        drawSkier(runningSkier[0], runningSkier[1]);
        if (runningSkier[0] > 820 && runningSkier[1] > 620) {
            runningSkier = [0, 40];
        }
        //wolken
        for (let i = 0; i < 5; i++) {
            passingClouds[0] += i;
            passingClouds[2] += i;
            passingClouds[4] += i;
            passingClouds[6] += i;
            drawCloud(passingClouds[0], passingClouds[1]);
            drawCloud(passingClouds[2], passingClouds[3]);
            drawCloud(passingClouds[4], passingClouds[5]);
            drawCloud(passingClouds[6], passingClouds[7]);
            if (passingClouds[0] > 900) {
                passingClouds[0] = -100;
            }
            else if (passingClouds[2] > 900) {
                passingClouds[2] = -100;
            }
            else if (passingClouds[4] > 900) {
                passingClouds[4] = -100;
            }
            else if (passingClouds[6] > 900) {
                passingClouds[6] = -100;
            }
        }
        //schnee
        for (let i = 0; i < fallingSnow.length; i++) {
            i++;
            fallingSnow[i] += 4;
            if (fallingSnow[i] > 600) {
                fallingSnow[i] = 0;
            }
            drawSnow(fallingSnow[i - 1], fallingSnow[i]);
        }
        window.setTimeout(animate, 110);
    }
})(Aufg_3 || (Aufg_3 = {})); /* namespace */
//# sourceMappingURL=canvas_3.js.map