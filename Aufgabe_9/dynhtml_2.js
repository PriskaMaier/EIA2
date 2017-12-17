/*
Aufgabe: Nr. 9 - DynHTML: Erpresserbrief
Name: Priska Maier
Matrikel: 256326
Datum: 17.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var Aufg_9;
(function (Aufg_9) {
    window.addEventListener("load", init);
    let selectedLetter;
    function init() {
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let n = letters.length;
        if (n == letters.length) {
            for (let i = 0; i < letters.length; i++) {
                drawLetterBox(letters[i]);
            }
        }
        drawTextBox();
    }
    // buchstaben oben erzeugen
    function drawLetterBox(_letters) {
        let l_div = document.createElement("div");
        l_div.style.width = "45px";
        l_div.style.height = "45px";
        l_div.style.margin = ".5em 0";
        l_div.style.lineHeight = "50px";
        l_div.style.backgroundColor = "#4e4f4e";
        l_div.style.border = "2px solid black";
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
    function drawTextBox() {
        let t_div = document.createElement("div");
        t_div.style.width = "75em";
        t_div.style.height = "30em";
        t_div.style.margin = "1em 0";
        t_div.style.backgroundColor = "#6e766d";
        t_div.addEventListener("click", placeLetters);
        document.body.appendChild(t_div);
    }
    // ausgew�hlte buchstaben im textfeld platzieren
    function placeLetters(_event) {
        let l_placeddiv = document.createElement("div");
        l_placeddiv.style.position = "absolute";
        l_placeddiv.style.left = _event.pageX - 22 + "px";
        l_placeddiv.style.top = _event.pageY - 22 + "px";
        l_placeddiv.style.lineHeight = "50px";
        l_placeddiv.style.width = "45px";
        l_placeddiv.style.height = "45px";
        l_placeddiv.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 50%, 70%)";
        l_placeddiv.style.cursor = "default";
        l_placeddiv.style.fontSize = "30px";
        l_placeddiv.innerText = selectedLetter;
        //falls noch kein buchstabe ausgew�hlt wurde, nichts platzieren
        if (selectedLetter != undefined) {
            l_placeddiv.addEventListener("click", placeLetters);
            document.body.appendChild(l_placeddiv);
            let click_target = _event.target;
        }
    }
    //angeklickter buchstabe ausw�hlen und hervorheben
    function handleClick(_event) {
        let click = _event.target;
        click.style.backgroundColor = "#ebebeb";
        click.style.color = "black";
        selectedLetter = click.id;
        let div_list = document.getElementsByClassName("letterbox");
        for (let i = 0; i < div_list.length; i++) {
            if (selectedLetter != div_list[i].id) {
                div_list[i].style.backgroundColor = "#4e4f4e";
                div_list[i].style.color = "white";
            }
        }
    }
})(Aufg_9 || (Aufg_9 = {}));
//# sourceMappingURL=dynhtml_2.js.map