/*
Aufgabe: Nr. 4 - Assoziative Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 12.11.17
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_4;
(function (Aufg_4) {
    //    interface I_Clouds {
    //        x : number,
    //        y : number
    //    }
    //
    //    interface I_Snow {
    //        x : number,
    //        y : number
    //    }
    window.addEventListener("load", init);
    let crc;
    let imagedata;
    let fallingSnowX = [];
    let fallingSnowY = [];
    let passingCloudsX = [];
    let passingCloudsY = [];
    let runningSkiers = [];
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
        //        //feste b�ume
        //        drawTree(120, 460, "#5a924f");
        //        drawTree(240, 250, "#5a924f");
        //        drawTree(50, 120, "#548d68");
        //        drawTree(550, 500, "#548d68");
        //        drawTree(420, 350, "#548d68");
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
        for (let i = 0; i < 4; i++) {
            runningSkiers[i] = {
                x: -120,
                y: Math.random() * 200 - 120,
                colorHead: "hsl(20, 50%, 80%)",
                colorBody: "hsl(" + Math.random() * 360 + ", 45%, 65%)"
            };
        }
        for (let i = 0; i < runningSkiers.length; i++) {
            if (i == 0) {
                runningSkiers[i].x = -50;
                runningSkiers[i].y = 100;
            }
            else if (i == 1) {
                runningSkiers[i].x = -50;
                runningSkiers[i].y = 100;
            }
            else if (i == 2) {
                runningSkiers[i].x = -55;
                runningSkiers[i].y = 300;
            }
            else if (i == 3) {
                runningSkiers[i].x = -50;
                runningSkiers[i].y = -150;
            }
        }
        for (let i = 0; i < 6; i++) {
            //            passingClouds[i] = {
            //                x : 10 + Math.random() * 800,
            //                y : 20 + Math.random() * 200
            //            };
            passingCloudsX[i] = 10 + Math.random() * 800;
            passingCloudsY[i] = 20 + Math.random() * 200;
        }
        for (let i = 0; i < 160; i++) {
            //            fallingSnow[i] = {
            //                x : Math.random() * 800,
            //                y : Math.random() * 600
            //            };
            fallingSnowX[i] = Math.random() * 800;
            fallingSnowY[i] = Math.random() * 600;
        }
        animate();
    } /* init */
    //b�ume
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
    function randomTrees() {
        //feste b�ume
        drawTree(120, 460, "#5a924f");
        drawTree(240, 250, "#5a924f");
        drawTree(50, 120, "#548d68");
        drawTree(550, 500, "#548d68");
        drawTree(420, 350, "#548d68");
    }
    //wolken
    function drawCloud(/*_i_clouds : I_Clouds*/ x, y) {
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
    function drawSnow(/*_i_snow : I_Snow*/ x, y) {
        crc.beginPath();
        crc.arc(x, y, 5, 0, 2 * Math.PI);
        crc.fillStyle = "#ffffff";
        crc.fill();
        crc.lineWidth = .3;
        crc.strokeStyle = "#707070";
        crc.stroke();
    }
    //skifahrer
    function drawSkier(_i_skier) {
        //kopf
        crc.beginPath();
        crc.arc(_i_skier.x, _i_skier.y, 5, 0, 2 * Math.PI);
        crc.fillStyle = _i_skier.colorHead;
        crc.fill();
        //k�rper
        crc.beginPath();
        crc.moveTo(_i_skier.x - 10, _i_skier.y + 2);
        crc.lineTo(_i_skier.x, _i_skier.y + 8);
        crc.lineTo(_i_skier.x - 15, _i_skier.y + 30);
        crc.lineTo(_i_skier.x - 26, _i_skier.y + 22);
        crc.fillStyle = _i_skier.colorBody;
        crc.fill();
        //ski
        crc.beginPath();
        crc.moveTo(_i_skier.x - 37, _i_skier.y + 25);
        crc.lineTo(_i_skier.x - 10, _i_skier.y + 42);
        crc.lineTo(_i_skier.x - 6, _i_skier.y + 43);
        crc.lineWidth = 2.5;
        crc.lineCap = "round";
        crc.strokeStyle = "#000000";
        crc.stroke();
        //skistock
        crc.beginPath();
        crc.moveTo(_i_skier.x - 2, _i_skier.y + 16);
        crc.lineTo(_i_skier.x - 38, _i_skier.y + 12);
        crc.lineWidth = 1.5;
        crc.lineCap = "round";
        crc.strokeStyle = "#000000";
        crc.stroke();
    }
    function animate() {
        console.log("animation");
        crc.putImageData(imagedata, 0, 0);
        //skifahrer
        for (let i = 0; i < 4; i++) {
            if (runningSkiers[i].x > 820) {
                runningSkiers[i].x = -120;
                runningSkiers[i].y = Math.random() * 200 - 120;
                runningSkiers[i].colorBody = "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            }
            runningSkiers[i].x += 25;
            runningSkiers[i].y += 21;
            drawSkier(runningSkiers[i]);
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
            fallingSnowY[i] += 15 + Math.round(Math.random() * 6);
            drawSnow(fallingSnowX[i], fallingSnowY[i]);
        }
        window.setTimeout(animate, 90);
        randomTrees();
    }
})(Aufg_4 || (Aufg_4 = {})); /* namespace */
//# sourceMappingURL=canvas_4.js.map