/*
Aufgabe: Nr. 11 - FormElements: Weihnachtsbaumkonfigurator Remote
Name: Priska Maier
Matrikel: 256326
Datum: 14.01.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */


namespace Aufg_11    {
    
    window.addEventListener("load", createItems);
    
    window.addEventListener("load", updateOrder);
    window.addEventListener("change", updateOrder);
     
    var wk_baum : string[] = [/*baumA[0].name, "" + baumA[0].preis*/];
    var wk_halterung : string[] = [/*halterungA[0].name, "" + halterungA[0].preis*/];
    var wk_schmuck : string[][] = [];
    var wk_lieferoption : string[] = [/*lieferungA[0].name, "" + lieferungA[0].preis*/];
    
    var vorname : HTMLInputElement;
    var nachname : HTMLInputElement;
    var str_nr : HTMLInputElement;
    var plz : HTMLInputElement;
    var ort : HTMLInputElement;
    var email : HTMLInputElement;
    var tel : HTMLInputElement;
    var label : HTMLLabelElement;
    
    
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
            s_anz.id = "s-anz_" + i;
            s_anz.className = "anzahl";
            s_anz.min = "0";
            s_anz.max = "20";
            s_anz.step = "1";
            s_div.appendChild(s_anz);
        }
        
        //lieferoptionen
        let lieferung_box : HTMLDivElement = <HTMLDivElement>document.getElementById("lieferung-box");
        
        let l_select : HTMLSelectElement = document.createElement("select");
        
        l_select.name = "l_select";
        l_select.id = "l_select";
        lieferung_box.appendChild(l_select);
        
        for (let i : number = 0; i < lieferungA.length; i++) {
            let l_option : HTMLElement = document.createElement("option");
            l_option.innerText = lieferungA[i].name + " - " + lieferungA[i].preis + " \u20AC";
            l_option.id = "l_" + lieferungA[i].name;
            l_select.appendChild(l_option);  
        }
        
        //kundendaten
        let daten : HTMLDivElement = <HTMLDivElement>document.getElementById("daten-box");
        
        let d_name : HTMLDivElement = document.createElement("div");
        daten.appendChild(d_name);
        
        vorname = document.createElement("input");
        vorname.type = "text";
        vorname.name = "d_vorname";
        vorname.placeholder = "Vorname";
        vorname.required = true;
        d_name.appendChild(vorname);
        
        nachname = document.createElement("input");
        nachname.type = "text";
        nachname.name = "d_nachname";
        nachname.placeholder = "Nachname";
        nachname.required = true;
        d_name.appendChild(nachname);
        
        let d_adresse : HTMLDivElement = document.createElement("div");
        daten.appendChild(d_adresse);
        
        str_nr = document.createElement("input");
        str_nr.type = "text";
        str_nr.name = "d_str_nr";
        str_nr.placeholder = "Stra\xDFe und Hausnummer";
        str_nr.required = true;
        d_adresse.appendChild(str_nr);
        
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "d_plz";
        plz.placeholder = "Postleitzahl";
        plz.required = true;
        d_adresse.appendChild(plz);
        
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "d_ort";
        ort.placeholder = "Ort";
        ort.required = true;
        d_adresse.appendChild(ort);
        
        let d_kontakt : HTMLDivElement = document.createElement("div");
        daten.appendChild(d_kontakt);
        
        email = document.createElement("input");
        email.type = "email";
        email.name = "d_email";
        email.placeholder = "E-Mail";
        email.required = true;
        d_kontakt.appendChild(email);
        
        tel = document.createElement("input");
        tel.type = "text";
        tel.name = "d_tel";
        tel.placeholder = "Telefonnummer";
        tel.required = false;
        d_kontakt.appendChild(tel);
        
        let button : HTMLButtonElement = <HTMLButtonElement>document.getElementById("best-button");
        button.addEventListener("mousedown", handleMouseDown);
        
        console.log(halterungA[0].name, halterungA[0].preis);
        
    }
    
    
    function updateOrder (_event : Event) : void  {
        let target : HTMLInputElement = <HTMLInputElement>_event.target;
        
        let anzahl : HTMLInputElement[] = [];
        let checkedboxes : HTMLInputElement[] = [];
        
        let gesamt : number = 0;
        
        for (let i : number = 0; i < baumA.length; i++) {
            if (target.value == baumA[i].name && target.id == "b_select") {
                wk_baum[0] = baumA[i].name;
                wk_baum[1] = "" + baumA[i].preis;
            }
        }
        
        for (let i : number = 0; i < halterungA.length; i++) {
            if (target.value == halterungA[i].name && target.id == "h_select") {
                wk_halterung[0] = halterungA[i].name;
                wk_halterung[1] = "" + halterungA[i].preis;
            }
        }
        
        for (let i : number = 0; i < schmuckA.length; i++) {
            anzahl[i] = <HTMLInputElement>document.getElementById("s-anz_" + i);
            checkedboxes[i] = <HTMLInputElement>document.getElementById("s_" + i);
            
            if (target.id == "s-anz_" + i && target.id == "s_" + i) {
                wk_schmuck[0] = [schmuckA[i].name, "" + (schmuckA[i].preis * parseInt(anzahl[i].value))];
            }
        }
        
        for (let i : number = 0; i < lieferungA.length; i++) {
            if (target.value == lieferungA[i].name && target.id == "l_select") {
                wk_lieferoption[0] = lieferungA[i].name;
                wk_lieferoption[1] = "" + lieferungA[i].preis;
            }
        }
        
        
        let warenkorb : HTMLDivElement = <HTMLDivElement>document.getElementById("best-auswahl");
        
        warenkorb.innerHTML = "<hr>"
        warenkorb.innerHTML += "" + wk_baum[0] + " - " + wk_baum[1] + " \u20AC <br>";
        warenkorb.innerHTML += "" + wk_halterung[0] + " - " + wk_halterung[1] + " \u20AC <br>";
        warenkorb.innerHTML += "" + wk_lieferoption[0] + " - " + wk_lieferoption[1] + " \u20AC <br>";
        
        gesamt = parseFloat(wk_baum[1]) + parseFloat(wk_halterung[1]) + parseFloat(wk_lieferoption[1]);

        warenkorb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamt) + " \u20AC <br>";
        
        for (let i : number = 0; i < anzahl.length; i++) {
            if (checkedboxes[i] != null && checkedboxes[i].checked == true) {
                gesamt += parseFloat(wk_schmuck[i][1]);
                warenkorb.innerHTML += "" + wk_schmuck[i][0] + " - " + wk_schmuck[i][1] + " \u20AC <br>";
            }
        }
        
    }
    
    
    function handleMouseDown (_event : MouseEvent) : void {  
        if (vorname.checkValidity() == false || nachname.checkValidity() == false || str_nr.checkValidity() == false || plz.checkValidity() == false || ort.checkValidity() == false || email.checkValidity() == false) {
           alert("Bitte \xFCberpr\xFCfe deine Daten, die Angaben sind nicht korrekt.");
        }
        else {
            alert("Vielen Dank, deine Bestellung wird verarbeitet!");
        }
    }
    
}




    
    
    
    
    
      
    
    



