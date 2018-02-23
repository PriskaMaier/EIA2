/*
Aufgabe: Abschlussarbeit
Name: Priska Maier
Matrikel: 256326
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Endaufgabe    {
 
    export let crc : CanvasRenderingContext2D;
    
    window.addEventListener("load", init);
    
    export let imagedata : ImageData;
    
    let obj : Objects[] = [];
    
    
    let vines_img : HTMLImageElement;
    
    function init () : void {
        
        let canvas : HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        
        //hintergrund
//        crc.fillStyle = "#6a4d37";
//        crc.fillRect(0, 0, 1200, 650);
        
        vines_img = <HTMLImageElement>document.getElementById("background");
        crc.drawImage(vines_img, 0, 0);
           
        //boden
        crc.fillStyle = "#604530";
        crc.fillRect(0, 400, 1200, 250);
        

        //podest
        let p = new Pedestal(400, 380);
        obj.push(p);  
        
        //fackel links
        let t1 = new Torch(90, 200);
        obj.push(t1);
        
        //fackel rechts
        let t2 = new Torch(1000, 200);
        obj.push(t2);
        
        //truhe
        let c = new Chest(490, 280);
        obj.push(c);
       
        
        for (let i : number = 0; i < obj.length; i++) {
            let o : Objects = obj[i];
            o.draw();
        }
        
        t1.drawFire();
        t1.drawBasket();
        t2.drawFire();
        t2.drawBasket();
                
        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);
        
        c.drawUpperPartClosed();
        
        document.getElementById("chesthitbox").addEventListener("click", openChest);
            
    }
    
    function drawUpperPartOpened(_x : number, _y : number) : void    {
            //oberer (weißer) rand
            crc.fillStyle = "#b3ada7";
            crc.fillRect(_x, _y - 70, 200, 69);

            //innen (blauschwarz)
            crc.fillStyle = "#2f2e2c";
            crc.fillRect(_x + 8, _y - 65, 184, 55);
            crc.fillStyle = "#222c3c";
            crc.fillRect(_x + 8, _y - 40, 184, 30);
            
            //schloss
            crc.beginPath();
            crc.arc(_x + 100, _y - 75, 20, 0, Math.PI, true);
            crc.fillStyle = "#d6c14f";
            crc.fill();
            crc.fillRect(_x + 80, _y - 77, 40, 8);
            crc.closePath();
        }
    
    function openChest (_event : MouseEvent)  : void    {
        crc.putImageData(imagedata, 0, 0);
        drawUpperPartOpened(490, 280);
    }
    
    
    function animate () : void  {
      
    }
}
















