/*
Aufgabe: Nr. 6 - Polymorphe Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 22.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg_6;
(function (Aufg_6) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        draw() { }
        move() {
            this.x += Math.random() * 200;
            this.y += Math.random() * 200;
        }
    }
    Aufg_6.MovingObjects = MovingObjects;
})(Aufg_6 || (Aufg_6 = {}));
//# sourceMappingURL=objekte.js.map