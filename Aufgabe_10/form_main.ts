/*
Aufgabe: Nr. 10 - FormElements: Weihnachtsbaumkonfigurator
Name: Priska Maier
Matrikel: 256326
Datum: 07.01.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */


namespace Aufg_10    {
    
    window.addEventListener("load", createItems);
    
//    window.addEventListener("change", update);
    
    let b_input : HTMLInputElement[] = [];
    let h_input : HTMLInputElement[] = [];   
    let s_input : HTMLInputElement[] = [];
    
    let baum : HTMLElement;
    let halterung : HTMLElement;
    let schmuck : HTMLElement;
    let bestellung : HTMLElement;
    let bestellbutton : HTMLElement;
    
//    function init () : void {
//        
//    }
    
    function createItems () : void {
        
        //baumauswahl
        let baum_box : HTMLDivElement = <HTMLDivElement>document.getElementById("baumart-box");
        
        let b_select : HTMLSelectElement = document.createElement("select");
        
        b_select.name = "b_select";
        b_select.id = "b_select";
        baum_box.appendChild(b_select);
        
        for (let i : number = 0; i < baumA.length; i++) {
            let b_option : HTMLElement = document.createElement("option");
            b_option.innerText = baumA[i].name + " - " + baumA[i].preis + " \u20AC";
            b_option.id = "b_" + baumA[i].name;
            b_select.appendChild(b_option);  
        }
        
        //halterungsauswahl
        let halterung_box : HTMLDivElement = <HTMLDivElement>document.getElementById("halterung-box");
        
        let h_select : HTMLSelectElement = document.createElement("select");
        
        h_select.name = "h_select";
        h_select.id = "h_select";
        halterung_box.appendChild(h_select);
        
        for (let i : number = 0; i < halterungA.length; i++) {
            let h_option : HTMLElement = document.createElement("option");
            h_option.innerText = halterungA[i].name + " - " + halterungA[i].preis + " \u20AC";
            h_option.id = "h_" + halterungA[i].name;
            h_select.appendChild(h_option);  
        }
        
        //schmuckauswahl
        let schmuck_box : HTMLDivElement = <HTMLDivElement>document.getElementById("schmuck-box");
        
        let s_box : HTMLDivElement = document.createElement("div");
        
        s_box.className = "schmuck_box";
        schmuck_box.appendChild(s_box);
        
        for (let i : number = 0; i < schmuckA.length; i++) {
            let s_div : HTMLDivElement = document.createElement("div");
            s_div.className = "schmuck_div";
            s_box.appendChild(s_div);
            
            let s_checkb : HTMLInputElement = document.createElement("input");
            s_checkb.type = "checkbox";
            s_checkb.name = "schmuck-checkb";
            s_checkb.value = "schmuck-checkb";
            s_checkb.id = "s_" + i;
            s_div.appendChild(s_checkb);
            
            let s_label : HTMLLabelElement = document.createElement("label");
            s_label.htmlFor = s_checkb.id;
            s_label.innerText = schmuckA[i].name + " - " + schmuckA[i].preis + " \u20AC";
            s_label.id = "s-label_" + i;
            s_div.appendChild(s_label);
            
            let s_anz : HTMLInputElement = document.createElement("input");
            s_anz.type = "number";
            s_anz.name = "schmuck-anz";
            s_anz.value = "schmuck-anz";
            s_anz.id = "s-anz_" + i;
            s_anz.className = "anzahl";
            s_anz.min = "0";
            s_anz.max = "20";
            s_anz.step = "1";
            s_div.appendChild(s_anz);
        }
    }
    
        function createOrder (_event : Event) : void  {
        let target : HTMLInputElement = <HTMLInputElement>_event.target;
        let itemanzahl : HTMLInputElement[] = [];
        let checkedboxes : HTMLInputElement[] = [];
        
        let summe : number = 0;
        
        let best : HTMLDivElement = <HTMLDivElement>document.getElementById("bestellung");
        
        for (let i : number = 0; i < baumA.length; i++) {
            if (target.value == baumA[i].name && target.id == "b_select")   {
                
            }
        }
            
        for (let i : number = 0; i < halterungA.length; i++) {
            if (target.value == baumA[i].name && target.id == "b_select")   {
                
            }
        }
            
        for (let i : number = 0; i < schmuckA.length; i++) {
            if (target.value == baumA[i].name && target.id == "b_select")   {
                
            }
        }
        
        summe = parseFloat(baum[1]) + parseFloat(halterung[1]);
        
    }
    
    function handleMouseDownChange (_event : MouseEvent) : void {
    
    }
    
}



//        Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
//            places = !isNaN(places = Math.abs(places)) ? places : 2;
//            symbol = symbol !== undefined ? symbol : "$";
//            thousand = thousand || ",";
//            decimal = decimal || ".";
//            var number = this,
//                negative = number < 0 ? "-" : "",
//                i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
//                j = (j = i.length) > 3 ? j % 3 : 0;
//            return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
//        };


    
    
    
    
    
    
    
    
    
    
    
    
    
    



