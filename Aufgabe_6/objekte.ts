/*
Aufgabe: Nr. 6 - Polymorphe Skipiste
Name: Priska Maier
Matrikel: 256326
Datum: 22.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

 
namespace Aufg_6    {
    
    export class MovingObjects {
        x : number;
        y : number
        
        constructor (_x : number, _y : number)  {
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        
        draw() : void { }
        
        move() : void { }
        
    }
}