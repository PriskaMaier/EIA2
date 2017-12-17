/*
Aufgabe: Nr. 9 - DynHTML: Erpresserbrief
Name: Priska Maier
Matrikel: 256326
Datum: 17.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */


namespace Aufg_9    {
    
    window.addEventListener("load", init);
    
    let selectedLetter : string;
    
    function init (): void {

        let letters : string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        let n : number = letters.length;

        if (n == letters.length) {

            for (let i: number = 0; i < letters.length; i++) {
                drawLetterBox(letters[i]);
            }
        }

        drawTextBox();
    }
    
    
    // buchstaben oben erzeugen
    function drawLetterBox(_letters: string): void {

        let l_div: HTMLDivElement = document.createElement("div");
        
        l_div.style.width = "45px";
        l_div.style.height = "45px";

        l_div.style.margin = ".5em 0";
//        l_div.style.padding = ".2em 0";
        l_div.style.lineHeight = "50px";
           
        l_div.style.backgroundColor = "#4e4f4e";
        l_div.style.border = "2px solid black";
//        l_div.style.opacity = ".6";
   
        l_div.style.cursor = "pointer";

        l_div.style.fontSize = "30px";
        l_div.style.color = "white";
        l_div.innerText = _letters;

        l_div.className = "letterbox";
        l_div.id = _letters;

        l_div.addEventListener("click", handleClick);
        document.body.appendChild(l_div);
    }
    
    
    //textfeld erzeugen
    function drawTextBox () : void  {
        
        let t_div : HTMLDivElement = document.createElement("div");
        
        t_div.style.width = "80em";
        t_div.style.height = "38em";
        
        t_div.style.margin = "1em 0";
        
        t_div.style.backgroundColor = "#6e766d";
        
        t_div.addEventListener("click", placeLetters);
        document.body.appendChild(t_div);
    }
    
    
    // ausgewählte buchstaben im textfeld platzieren
    function placeLetters (_event: MouseEvent) : void {
        
        let l_placeddiv: HTMLDivElement = document.createElement("div");

        l_placeddiv.style.position = "absolute";
        l_placeddiv.style.left = _event.pageX  - 22 + "px";
        l_placeddiv.style.top = _event.pageY  - 22 + "px";
        l_placeddiv.style.lineHeight = "50px";
        
        l_placeddiv.style.width = "45px";
        l_placeddiv.style.height = "45px";
           
        l_placeddiv.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 30%, 70%)";
        
        l_placeddiv.style.cursor = "default";

        l_placeddiv.style.fontSize = "30px";
        l_placeddiv.innerText = selectedLetter;

        //falls noch kein buchstabe ausgewählt wurde, nichts platzieren
        if (selectedLetter != undefined)   {
            l_placeddiv.addEventListener("click", placeLetters);
            document.body.appendChild(l_placeddiv);
    
            let click_target: HTMLDivElement = <HTMLDivElement>_event.target;
        }
    }


    //angeklickter buchstabe auswählen und hervorheben
    function handleClick(_event: MouseEvent) : void {
        
            let click : HTMLDivElement = <HTMLDivElement>_event.target;
        
            click.style.backgroundColor = "#c8f6c4";          
            
            selectedLetter = click.id;
             
            let div_list: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>> document.getElementsByClassName("letterbox");
          
            
            for (let i: number = 0; i < div_list.length; i++) {
                
                if (selectedLetter != div_list[i].id) {
                    div_list[i].style.backgroundColor = "#4e4f4e";
                    div_list[i].style.color = "white";
                }
            }
    }
    
//    //buchstaben löschen
//    function deleteLetter(_l: string): void {
//
//        for(let i: number = 0; i < letters.length; i++) {
//            
//            if (_l == letters[i]) {   
//                document.getElementById("_letter").removeChild(letters[i].HTMLDivElement);
//                letters.splice(i, 1);
//            }
//        }
//    }
//    
//    function handleKeyDown(event: KeyboardEvent): void {
//        
//        let altDown : boolean;
//
//        for(let i: number = 0; i < letters.length; i++) {
//            
//            if (event.keyCode == letters[i].id) {
//                selectedLetter(letters[i]);
//            }
//        }
//        
//        if (event.keyCode == 18) {
//       
//            if (selectedLetter != undefined)   {
//                l_placeddiv.addEventListener("click", deleteLetter);
//                let click_target: HTMLDivElement = <HTMLDivElement>_event.target;
//            }
//            
//            altDown = true;
//        }
//        
//    function keyUp(event: KeyboardEvent): void {
//            //wenn alt losgelassen wird -> setzt boolean wieder zurueck damit wieder neue chars platziert werden koennen
//        if (event.keyCode == 18) {
//            this.altDown = false;
//        }
//    }
    
    //    "Key" + letters[i]    keydown
    
    
}


    
    
    
    
    
    
    
    
    
    
    
    
    
    



