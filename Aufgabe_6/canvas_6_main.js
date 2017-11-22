/*
Aufgabe: Nr. 6 - Polymorphe Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 22.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_6;
(function (Aufg_6) {
    window.addEventListener("load", init);
    let imagedata;
    let objects = [];
    let n_skiers = 8;
    let n_clouds = 6;
    let n_snowflakes = 160;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufg_6.crc = canvas.getContext("2d");
        //himmel
        Aufg_6.crc.fillStyle = "#b2dfee";
        Aufg_6.crc.fillRect(0, 0, 800, 600);
        //rechteck: x, y, breite, h�he
        //berge (hintergrund)
        Aufg_6.crc.beginPath();
        Aufg_6.crc.moveTo(350, 550);
        Aufg_6.crc.lineTo(550, 200);
        Aufg_6.crc.lineTo(650, 350);
        Aufg_6.crc.lineTo(650, 550);
        Aufg_6.crc.closePath();
        Aufg_6.crc.fillStyle = "#9e9e9e";
        Aufg_6.crc.fill();
        Aufg_6.crc.beginPath();
        Aufg_6.crc.moveTo(500, 600);
        Aufg_6.crc.lineTo(700, 250);
        Aufg_6.crc.lineTo(800, 400);
        Aufg_6.crc.lineTo(800, 600);
        Aufg_6.crc.closePath();
        Aufg_6.crc.fillStyle = "#b0b0b0";
        Aufg_6.crc.fill();
        //sonne
        Aufg_6.crc.beginPath();
        Aufg_6.crc.arc(680, 100, 45, 0, 2 * Math.PI);
        Aufg_6.crc.fillStyle = "#ffd700";
        Aufg_6.crc.fill();
        //kreis: x, y (mittelpunkt), radius, startwinkel, endwinkel, uhrzeigersinn
        // piste
        Aufg_6.crc.beginPath();
        Aufg_6.crc.moveTo(60, 0);
        Aufg_6.crc.lineTo(800, 550);
        Aufg_6.crc.lineTo(800, 600);
        Aufg_6.crc.lineTo(0, 600);
        Aufg_6.crc.lineTo(0, 0);
        Aufg_6.crc.closePath();
        Aufg_6.crc.fillStyle = "#f2f2f2";
        Aufg_6.crc.fill();
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
        Aufg_6.crc.beginPath();
        Aufg_6.crc.moveTo(0, 240);
        Aufg_6.crc.lineTo(460, 600);
        Aufg_6.crc.lineWidth = 1.5;
        Aufg_6.crc.strokeStyle = "#262626";
        Aufg_6.crc.stroke();
        Aufg_6.crc.beginPath();
        Aufg_6.crc.moveTo(0, 250);
        Aufg_6.crc.lineTo(450, 600);
        Aufg_6.crc.lineWidth = 1.5;
        Aufg_6.crc.strokeStyle = "#262626";
        Aufg_6.crc.stroke();
        imagedata = Aufg_6.crc.getImageData(0, 0, canvas.width, canvas.height);
        //skifahrer
        for (let i = 0; i < n_skiers; i++) {
            let sk = new Aufg_6.Skiers(Math.random() * 200 - 300, Math.random() * 300 - 200, Math.random() * 3 + 22, Math.random() * 3 + 18, "hsl(20, 50%, 80%)", "hsl(" + Math.random() * 360 + ", 45%, 65%)");
            objects.push(sk);
        }
        //wolken
        for (let i = 0; i < n_clouds; i++) {
            let c = new Aufg_6.Clouds(10 + Math.random() * 800, 20 + Math.random() * 200);
            objects.push(c);
        }
        //schnee
        for (let i = 0; i < n_snowflakes; i++) {
            let sn = new Aufg_6.Snow(Math.random() * 800, Math.random() * 600);
            objects.push(sn);
        }
        animate();
    } /* init */
    //b�ume
    function drawTree(x, y, color) {
        Aufg_6.crc.fillStyle = "#8b5a2b";
        Aufg_6.crc.fillRect(x - 6, y + 60, 12, 15);
        Aufg_6.crc.beginPath();
        Aufg_6.crc.moveTo(x, y);
        Aufg_6.crc.lineTo(x + 25, y + 40);
        Aufg_6.crc.lineTo(x - 25, y + 40);
        Aufg_6.crc.closePath();
        Aufg_6.crc.fillStyle = color;
        Aufg_6.crc.fill();
        Aufg_6.crc.beginPath();
        Aufg_6.crc.moveTo(x, y + 10);
        Aufg_6.crc.lineTo(x + 25, y + 60);
        Aufg_6.crc.lineTo(x - 25, y + 60);
        Aufg_6.crc.closePath();
        Aufg_6.crc.fillStyle = color;
        Aufg_6.crc.fill();
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
        Aufg_6.crc.putImageData(imagedata, 0, 0);
        for (let i = 0; i < objects.length; i++) {
            let o = objects[i];
            o.move();
        }
        window.setTimeout(animate, 90);
        randomTrees();
    }
})(Aufg_6 || (Aufg_6 = {})); /* namespace */
//# sourceMappingURL=canvas_6_main.js.map