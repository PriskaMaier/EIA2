/*
Aufgabe: Nr. 10 - FormElements: Weihnachtsbaumkonfigurator
Name: Priska Maier
Matrikel: 256326
Datum: 07.01.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */


namespace Aufg_10    {
    
    export interface Items {
        name : string;
        preis : number
    }
           
        export let baumA : Items[] = [
                            { name : "Nordmanntanne", preis : 20 }, 
                            { name : "Edeltanne", preis : 40 },
                            { name : "Fichte", preis : 15 },
                            { name : "Blaufichte", preis : 20 },
                            { name : "Kiefer", preis : 15 }
        ];
        
        export let halterungA : Items[] = [
                            { name : "klein", preis : 5 },
                            { name : "mittel", preis : 10 },
                            { name : "gro\xDF", preis : 15 }
        ];
    
        export let schmuckA : Items[] = [
                            { name : "Kerzen", preis : 1 },
                            { name : "LED-Lichterkette", preis : 8 },
                            { name : "Kugeln (rot, gl\xE4nzend)", preis : .5 },
                            { name : "Kugeln (blau, gl\xE4nzend)", preis : .5 },
                            { name : "Kugeln (rot, matt)", preis : .5 },
                            { name : "Kugeln (blau, matt)", preis : .5 },
                            { name : "Kugeln (gold)", preis : .5 },
                            { name : "Kugeln (silber)", preis : .5 },
                            { name : "Lametta (gold)", preis : .5 },
                            { name : "Lametta (silber)", preis : .5 },
                            { name : "Figuranh\xE4nger - Weihnachtsmann", preis : .8 },
                            { name : "Figuranh\xE4nger - Engel", preis : .8 },
                            { name : "Figuranh\xE4nger - Nussknacker", preis : .8 },
                            { name : "Figuranh\xE4nger - Stern", preis : .8 }       
        ];
    
        export let lieferungA : Items[] = [
                            { name : "Standardlieferung (Zustellung in 5-7 Werktagen)", preis : 0 },
                            { name : "Premiumlieferung (Zustellung in 3 Werktagen)", preis : 3 },
                            { name : "Expresslieferung (Zustellung am n\xE4chsten Tag)", preis : 6 }
        ];
     
}


    
    
    
    
    
    
    
    
    
    
    
    
    
    



