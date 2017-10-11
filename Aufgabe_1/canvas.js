window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    let crc = canvas.getContext("2d");
    // piste
    crc.beginPath();
    crc.moveTo(0, 450);
    crc.lineTo(500, 0);
    crc.lineTo(0, 0);
    crc.closePath();
    crc.stroke();
    crc.fillStyle = "#CCFFFF";
    crc.fill();
}
