window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    let crc = canvas.getContext("2d");
    //himmel
    crc.fillStyle = "#b2dfee";
    crc.fillRect(0, 0, 800, 600);
    //rechteck: x, y, breite, h�he
    // piste (berg)
    crc.beginPath();
    crc.moveTo(0, 130);
    crc.lineTo(800, 550);
    crc.lineTo(800, 600);
    crc.lineTo(0, 600);
    crc.closePath();
    crc.fillStyle = "#f5f5f5";
    crc.fill();
    //sonne
    crc.beginPath();
    crc.arc(670, 100, 45, 0, 2 * Math.PI);
    crc.fillStyle = "#ffd700";
    crc.fill();
    //kreis: x, y (mittelpunkt), radius, startwinkel, endwinkel, uhrzeigersinn
    //wolke 1
    crc.beginPath();
    crc.arc(580, 150, 30, 0, Math.PI, true);
    crc.arc(520, 150, 30, 0, Math.PI, true);
    crc.fillStyle = "#ffffff";
    crc.fill();
    crc.arc(550, 132, 25, 0, Math.PI, true);
    crc.fillStyle = "#ffffff";
    crc.fill();
    //wolke 2
    crc.beginPath();
    crc.arc(380, 90, 30, 0, Math.PI, true);
    crc.arc(320, 90, 30, 0, Math.PI, true);
    crc.fillStyle = "#ffffff";
    crc.fill();
    crc.arc(350, 72, 25, 0, Math.PI, true);
    crc.fillStyle = "#ffffff";
    crc.fill();
    //baum
    crc.fillStyle = "#8b5a2b";
    crc.fillRect(288, 455, 25, 45);
    crc.beginPath();
    crc.moveTo(300, 350);
    crc.lineTo(350, 430);
    crc.lineTo(250, 430);
    crc.closePath();
    crc.fillStyle = "#5a924f";
    crc.fill();
    crc.beginPath();
    crc.moveTo(300, 390);
    crc.lineTo(350, 470);
    crc.lineTo(250, 470);
    crc.closePath();
    crc.fillStyle = "#5a924f"; /* #228b22 */
    crc.fill();
}
