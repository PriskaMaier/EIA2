/*
Aufgabe: Nr. 11 - FormElements: Weihnachtsbaumkonfigurator Remote
Name: Priska Maier
Matrikel: 256326
Datum: 14.01.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var Aufg_11;
(function (Aufg_11) {
    window.addEventListener("load", createItems);
    window.addEventListener("load", updateOrder);
    window.addEventListener("change", updateOrder);
    var vorname;
    var nachname;
    var str_nr;
    var plz;
    var ort;
    var email;
    var tel;
    var label;
    function createItems() {
        //baumauswahl
        let baum_box = document.getElementById("baumart-box");
        let b_select = document.createElement("select");
        b_select.name = "b_select";
        b_select.id = "b_select";
        baum_box.appendChild(b_select);
        for (let i = 0; i < Aufg_11.baumA.length; i++) {
            let b_option = document.createElement("option");
            b_option.innerText = Aufg_11.baumA[i].name + " - " + Aufg_11.baumA[i].preis + " \u20AC";
            b_option.id = "b_" + Aufg_11.baumA[i].name;
            b_select.appendChild(b_option);
        }
        //halterungsauswahl
        let halterung_box = document.getElementById("halterung-box");
        let h_select = document.createElement("select");
        h_select.name = "h_select";
        h_select.id = "h_select";
        halterung_box.appendChild(h_select);
        for (let i = 0; i < Aufg_11.halterungA.length; i++) {
            let h_option = document.createElement("option");
            h_option.innerText = Aufg_11.halterungA[i].name + " - " + Aufg_11.halterungA[i].preis + " \u20AC";
            h_option.id = "h_" + Aufg_11.halterungA[i].name;
            h_select.appendChild(h_option);
        }
        //schmuckauswahl
        let schmuck_box = document.getElementById("schmuck-box");
        let s_box = document.createElement("div");
        s_box.className = "schmuck_box";
        schmuck_box.appendChild(s_box);
        for (let i = 0; i < Aufg_11.schmuckA.length; i++) {
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
            s_label.innerText = Aufg_11.schmuckA[i].name + " - " + Aufg_11.schmuckA[i].preis + " \u20AC";
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
        for (let i = 0; i < Aufg_11.lieferungA.length; i++) {
            let l_option = document.createElement("option");
            l_option.innerText = Aufg_11.lieferungA[i].name + " - " + Aufg_11.lieferungA[i].preis + " \u20AC";
            l_option.id = "l_" + Aufg_11.lieferungA[i].name;
            l_select.appendChild(l_option);
        }
        //kundendaten
        let daten = document.getElementById("daten-box");
        let d_name = document.createElement("div");
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
        let d_adresse = document.createElement("div");
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
        let d_kontakt = document.createElement("div");
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
        let button = document.getElementById("best-button");
        button.addEventListener("mousedown", handleMouseDown);
    }
    function updateOrder(_event) {
        let target = _event.target;
        let anzahl = [];
        let checkedboxes = [];
        let wk_baum = [Aufg_11.baumA[0].name, "" + Aufg_11.baumA[0].preis];
        let wk_halterung = [Aufg_11.halterungA[0].name, "" + Aufg_11.halterungA[0].preis];
        let wk_schmuck = [];
        let wk_lieferoption = [Aufg_11.lieferungA[0].name, "" + Aufg_11.lieferungA[0].preis];
        let gesamt = 0;
        let warenkorb = document.getElementById("best-auswahl");
        warenkorb.innerHTML = "<hr>";
        warenkorb.innerHTML += "" + wk_baum[0] + " - " + wk_baum[1] + " \u20AC <br>";
        warenkorb.innerHTML += "" + wk_halterung[0] + " - " + wk_halterung[1] + " \u20AC <br>";
        warenkorb.innerHTML += "" + wk_lieferoption[0] + " - " + wk_lieferoption[1] + " \u20AC <br>";
        for (let i = 0; i < Aufg_11.baumA.length; i++) {
            if (target.value == Aufg_11.baumA[i].name && target.id == "b_" + Aufg_11.baumA[i].name) {
                wk_baum[0] = Aufg_11.baumA[i].name;
                wk_baum[1] = "" + Aufg_11.baumA[i].preis;
                console.log(Aufg_11.baumA[i].name, Aufg_11.baumA[i].preis);
            }
        }
        for (let i = 0; i < Aufg_11.halterungA.length; i++) {
            if (target.value == Aufg_11.halterungA[i].name && target.id == "h_select") {
                wk_halterung[0] = Aufg_11.halterungA[i].name;
                wk_halterung[1] = "" + Aufg_11.halterungA[i].preis;
            }
        }
        for (let i = 0; i < Aufg_11.schmuckA.length; i++) {
            anzahl[i] = document.getElementById("s-anz_" + i);
            checkedboxes[i] = document.getElementById("s_" + i);
            if (target.id == "s-anz_" + i && target.id == "s_" + i) {
                wk_schmuck[0] = [Aufg_11.schmuckA[i].name, "" + (Aufg_11.schmuckA[i].preis * parseInt(anzahl[i].value))];
            }
        }
        for (let i = 0; i < Aufg_11.lieferungA.length; i++) {
            if (target.value == Aufg_11.lieferungA[i].name && target.id == "l_select") {
                wk_lieferoption[0] = Aufg_11.lieferungA[i].name;
                wk_lieferoption[1] = "" + Aufg_11.lieferungA[i].preis;
            }
        }
        gesamt = parseFloat(wk_baum[1]) + parseFloat(wk_halterung[1]) + parseFloat(wk_lieferoption[1]);
        warenkorb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamt) + " \u20AC <br>";
        for (let i = 0; i < anzahl.length; i++) {
            if (checkedboxes[i] != null && checkedboxes[i].checked == true) {
                gesamt += parseFloat(wk_schmuck[i][0]);
                warenkorb.innerHTML += "" + wk_schmuck[i][0] + " - " + wk_schmuck[i][1] + " \u20AC <br>";
            }
        }
    }
    function handleMouseDown(_event) {
        if (vorname.checkValidity() == false || nachname.checkValidity() == false || str_nr.checkValidity() == false || plz.checkValidity() == false || ort.checkValidity() == false || email.checkValidity() == false) {
            alert("Bitte \xFCberpr\xFCfe deine Daten, die Angaben sind nicht korrekt.");
        }
        else {
            alert("Vielen Dank, deine Bestellung wird verarbeitet!");
        }
    }
})(Aufg_11 || (Aufg_11 = {}));
//# sourceMappingURL=form_2_main.js.map