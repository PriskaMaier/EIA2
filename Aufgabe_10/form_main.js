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
    //    window.addEventListener("change", update);
    let b_input = [];
    let h_input = [];
    let s_input = [];
    let baum;
    let halterung;
    let schmuck;
    let bestellung;
    let bestellbutton;
    //    function init () : void {
    //        
    //    }
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
            s_anz.value = "schmuck-anz";
            s_anz.id = "s-anz_" + i;
            s_anz.className = "anzahl";
            s_anz.min = "0";
            s_anz.max = "20";
            s_anz.step = "1";
            s_div.appendChild(s_anz);
        }
    }
    function createOrder(_event) {
        let target = _event.target;
        let itemanzahl = [];
        let checkedboxes = [];
        let summe = 0;
        let best = document.getElementById("bestellung");
        for (let i = 0; i < Aufg_10.baumA.length; i++) {
            if (target.value == Aufg_10.baumA[i].name && target.id == "b_select") {
            }
        }
        for (let i = 0; i < Aufg_10.halterungA.length; i++) {
            if (target.value == Aufg_10.baumA[i].name && target.id == "b_select") {
            }
        }
        for (let i = 0; i < Aufg_10.schmuckA.length; i++) {
            if (target.value == Aufg_10.baumA[i].name && target.id == "b_select") {
            }
        }
        summe = parseFloat(baum[1]) + parseFloat(halterung[1]);
    }
    function handleMouseDownChange(_event) {
    }
})(Aufg_10 || (Aufg_10 = {}));
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
//# sourceMappingURL=form_main.js.map