/*
Aufgabe: Nr. 10 - FormElements: Weihnachtsbaumkonfigurator
Name: Priska Maier
Matrikel: 256326
Datum: 07.01.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var Aufg_10;
(function (Aufg_10) {
    window.addEventListener("load", createItems);
    window.addEventListener("change", updateOrder);
    let wk_baum = [Aufg_10.baumA[0].name, "" + Aufg_10.baumA[0].preis];
    let wk_halterung = [Aufg_10.halterungA[0].name, "" + Aufg_10.halterungA[0].preis];
    let wk_schmuck = [];
    let wk_lieferoption = [Aufg_10.lieferungA[0].name, "" + Aufg_10.lieferungA[0].preis];
    let vorname;
    let nachname;
    let str_nr;
    let plz;
    let ort;
    let email;
    let tel;
    let label;
    function createItems() {
        //baumauswahl
        let baum_box = document.getElementById("baumart-box");
        let b_select = document.createElement("select");
        b_select.name = "b_select";
        b_select.id = "b_select";
        baum_box.appendChild(b_select);
        for (let i = 0; i < Aufg_10.baumA.length; i++) {
            let b_option = document.createElement("option");
            b_option.innerText = Aufg_10.baumA[i].name + " - " + Aufg_10.baumA[i].preis + " \u20AC";
            b_option.id = "b_" + Aufg_10.baumA[i].name;
            b_select.appendChild(b_option);
        }
        //halterungsauswahl
        let halterung_box = document.getElementById("halterung-box");
        let h_select = document.createElement("select");
        h_select.name = "h_select";
        h_select.id = "h_select";
        halterung_box.appendChild(h_select);
        for (let i = 0; i < Aufg_10.halterungA.length; i++) {
            let h_option = document.createElement("option");
            h_option.innerText = Aufg_10.halterungA[i].name + " - " + Aufg_10.halterungA[i].preis + " \u20AC";
            h_option.id = "h_" + Aufg_10.halterungA[i].name;
            h_select.appendChild(h_option);
        }
        //schmuckauswahl
        let schmuck_box = document.getElementById("schmuck-box");
        let s_box = document.createElement("div");
        s_box.className = "schmuck_box";
        schmuck_box.appendChild(s_box);
        for (let i = 0; i < Aufg_10.schmuckA.length; i++) {
            let s_div = document.createElement("div");
            s_div.className = "schmuck_div";
            s_box.appendChild(s_div);
            let s_checkb = document.createElement("input");
            s_checkb.type = "checkbox";
            s_checkb.name = "schmuck-checkb";
            s_checkb.value = "schmuck-checkb";
            s_checkb.id = "s_" + i;
            s_div.appendChild(s_checkb);
            let s_label = document.createElement("label");
            s_label.htmlFor = s_checkb.id;
            s_label.innerText = Aufg_10.schmuckA[i].name + " - " + Aufg_10.schmuckA[i].preis + " \u20AC";
            s_label.id = "s-label_" + i;
            s_div.appendChild(s_label);
            let s_anz = document.createElement("input");
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
        let lieferung_box = document.getElementById("lieferung-box");
        let l_select = document.createElement("select");
        l_select.name = "l_select";
        l_select.id = "l_select";
        lieferung_box.appendChild(l_select);
        for (let i = 0; i < Aufg_10.lieferungA.length; i++) {
            let l_option = document.createElement("option");
            l_option.innerText = Aufg_10.lieferungA[i].name + " - " + Aufg_10.lieferungA[i].preis + " \u20AC";
            l_option.id = "l_" + Aufg_10.lieferungA[i].name;
            l_select.appendChild(l_option);
        }
        //kundendaten
        let daten = document.getElementById("daten-box");
        vorname = document.createElement("input");
        vorname.type = "text";
        vorname.name = "d_vorname";
        vorname.placeholder = "Vorname";
        vorname.required = true;
        daten.appendChild(vorname);
        nachname = document.createElement("input");
        nachname.type = "text";
        nachname.name = "d_nachname";
        nachname.placeholder = "Nachname";
        nachname.required = true;
        daten.appendChild(nachname);
        str_nr = document.createElement("input");
        str_nr.type = "text";
        str_nr.name = "d_str_nr";
        str_nr.placeholder = "Stra\xDFe und Hausnummer";
        str_nr.required = true;
        daten.appendChild(str_nr);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "d_str_nr";
        plz.placeholder = "Postleitzahl";
        plz.required = true;
        daten.appendChild(plz);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "d_str_nr";
        ort.placeholder = "Ort";
        ort.required = true;
        daten.appendChild(ort);
        email = document.createElement("input");
        email.type = "email";
        email.name = "d_str_nr";
        email.placeholder = "E-Mail";
        email.required = true;
        daten.appendChild(email);
        tel = document.createElement("input");
        tel.type = "text";
        tel.name = "d_str_nr";
        tel.placeholder = "Telefonnummer";
        tel.required = false;
        daten.appendChild(tel);
    }
    function updateOrder(_event) {
        let target = _event.target;
        let anzahl = [];
        let checkedboxes = [];
        let gesamt = 0;
        for (let i = 0; i < Aufg_10.baumA.length; i++) {
            if (target.value == Aufg_10.baumA[i].name && target.id == "b_select") {
                wk_baum[0] = Aufg_10.baumA[i].name;
                wk_baum[1] = "" + Aufg_10.baumA[i].preis;
            }
        }
        for (let i = 0; i < Aufg_10.halterungA.length; i++) {
            if (target.value == Aufg_10.halterungA[i].name && target.id == "h_select") {
                wk_halterung[0] = Aufg_10.halterungA[i].name;
                wk_halterung[1] = "" + Aufg_10.halterungA[i].preis;
            }
        }
        for (let i = 0; i < Aufg_10.schmuckA.length; i++) {
            anzahl[i] = document.getElementById("s-anz_" + i);
            checkedboxes[i] = document.getElementById("s_" + i);
            if (target.id == "s-anz_" + i && target.id == "s_" + i) {
                wk_schmuck[0] = [Aufg_10.schmuckA[i].name, "" + (Aufg_10.schmuckA[i].preis * parseInt(anzahl[i].value))];
            }
        }
        for (let i = 0; i < Aufg_10.lieferungA.length; i++) {
            if (target.value == Aufg_10.lieferungA[i].name && target.id == "l_select") {
                wk_lieferoption[0] = Aufg_10.lieferungA[i].name;
                wk_lieferoption[1] = "" + Aufg_10.lieferungA[i].preis;
            }
        }
        let warenkorb = document.getElementById("best-auswahl");
        let button = document.getElementById("best-button");
        button.addEventListener("mousedown", handleMouseDown);
        warenkorb.innerHTML = "<hr>";
        warenkorb.innerHTML += "" + wk_baum[0] + " - " + wk_baum[1] + "\u20AC <br>";
        warenkorb.innerHTML += "" + wk_halterung[0] + " - " + wk_halterung[1] + "\u20AC <br>";
        warenkorb.innerHTML += "" + wk_lieferoption[0] + " " + wk_lieferoption[1] + "\u20AC <br>";
        gesamt = parseFloat(wk_baum[1]) + parseFloat(wk_halterung[1]) + parseFloat(wk_lieferoption[1]);
        for (let i = 0; i < anzahl.length; i++) {
            if (checkedboxes[i] != null && checkedboxes[i].checked == true) {
                gesamt += parseFloat(wk_schmuck[i][1]);
                warenkorb.innerHTML += "" + wk_schmuck[i][0] + " - " + wk_schmuck[i][1] + "\u20AC <br>";
            }
        }
        let gesamtpreis = document.getElementById("best-gesamtpreis");
        gesamtpreis.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamt) + "\u20AC <br>";
    }
    function handleMouseDown(_event) {
        if (vorname.checkValidity() == false || nachname.checkValidity() == false || str_nr.checkValidity() == false || plz.checkValidity() == false || ort.checkValidity() == false || email.checkValidity() == false) {
            alert("Bitte �berpr�fe deine Daten, die Angaben sind nicht korrekt.");
        }
        else {
            alert("Vielen Dank, deine Bestellung wird verarbeitet!");
        }
    }
})(Aufg_10 || (Aufg_10 = {}));
//# sourceMappingURL=form_main.js.map