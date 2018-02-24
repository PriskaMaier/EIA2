/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Endaufgabe;
(function (Endaufgabe) {
    window.addEventListener("load", init);
    let imagedata2;
    let obj = [];
    let vines_img;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Endaufgabe.crc = canvas.getContext("2d");
        //hintergrund
        //        crc.fillStyle = "#6a4d37";
        //        crc.fillRect(0, 0, 1200, 650);
        vines_img = document.getElementById("background");
        Endaufgabe.crc.drawImage(vines_img, 0, 0);
        //boden
        Endaufgabe.crc.fillStyle = "#604530";
        Endaufgabe.crc.fillRect(0, 400, 1200, 250);
        //podest
        let p = new Endaufgabe.Pedestal(400, 380);
        obj.push(p);
        //fackel links
        let t1 = new Endaufgabe.Torch(90, 200);
        obj.push(t1);
        //fackel rechts
        let t2 = new Endaufgabe.Torch(1000, 200);
        obj.push(t2);
        //truhe
        let c = new Endaufgabe.Chest(490, 280);
        obj.push(c);
        for (let i = 0; i < obj.length; i++) {
            let o = obj[i];
            o.draw();
        }
        t1.drawFire();
        t1.drawBasket();
        t2.drawFire();
        t2.drawBasket();
        Endaufgabe.imagedata = Endaufgabe.crc.getImageData(0, 0, canvas.width, canvas.height);
        c.drawUpperPartClosed();
        document.getElementById("chesthitbox").addEventListener("click", openChest);
        document.getElementById("chesthitbox").addEventListener("touchstart", openChest);
    }
    function drawUpperPartOpened(_x, _y) {
        //oberer (wei�er) rand
        Endaufgabe.crc.fillStyle = "#b3ada7";
        Endaufgabe.crc.fillRect(_x, _y - 70, 200, 69);
        //innen (blauschwarz)
        Endaufgabe.crc.fillStyle = "#2f2e2c";
        Endaufgabe.crc.fillRect(_x + 8, _y - 65, 184, 55);
        Endaufgabe.crc.fillStyle = "#222c3c";
        Endaufgabe.crc.fillRect(_x + 8, _y - 40, 184, 30);
        //schloss
        Endaufgabe.crc.beginPath();
        Endaufgabe.crc.arc(_x + 100, _y - 75, 20, 0, Math.PI, true);
        Endaufgabe.crc.fillStyle = "#d6c14f";
        Endaufgabe.crc.fill();
        Endaufgabe.crc.fillRect(_x + 80, _y - 77, 40, 8);
        Endaufgabe.crc.closePath();
    }
    function openChest(_event) {
        Endaufgabe.crc.putImageData(Endaufgabe.imagedata, 0, 0);
        drawUpperPartOpened(490, 280);
        //neues bild speichern sobald truhe offen ist
        imagedata2 = Endaufgabe.crc.getImageData(0, 0, 1200, 650);
        moveHeartUp();
        window.setTimeout(moveHeartUp, 120);
    }
    function moveHeartUp() {
        Endaufgabe.crc.putImageData(imagedata2, 0, 0);
        //herzteil
        let h = new Endaufgabe.Heartpiece(590, 298, 5);
        obj.push(h);
        h.draw();
        let audio = document.getElementById("getitem");
        audio.play();
    }
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=endaufg_main.js.map