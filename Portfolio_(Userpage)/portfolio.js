/*
    Aufgabe: Semesteraufgabe - Pers�nliches Online Portfolio
    Name: Priska Maier
    Matrikel: 256326
    Datum: 19.07.2017
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    Er wurde nicht kopiert und auch nicht diktiert.
*/
var Portfolio;
(function (Portfolio) {
    var mk1_1 = {
        imagesrc: "mk1_s1-e1.jpg",
        category: "Studium",
        caption: "Fach Medienkonzeption - Storyboard zu einem Awaress-Kampagnen-Video"
    };
    var mk1_2 = {
        imagesrc: "mk1_s1-e2.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_3 = {
        imagesrc: "mk1_s1-e3.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_4 = {
        imagesrc: "mk1_s1-e4.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_5 = {
        imagesrc: "mk1_s2-e1.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_6 = {
        imagesrc: "mk1_s2-e2.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_7 = {
        imagesrc: "mk1_s3-e1.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_8 = {
        imagesrc: "mk1_s3-e2.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_9 = {
        imagesrc: "mk1_s4-e1.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_10 = {
        imagesrc: "mk1_s5-e1.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_11 = {
        imagesrc: "mk1_s5-e2.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_12 = {
        imagesrc: "mk1_s6-e1.jpg",
        category: "Studium",
        caption: ""
    };
    var mk1_13 = {
        imagesrc: "mk1_s6-e2.jpg",
        category: "Studium",
        caption: ""
    };
    var mk2 = {
        imagesrc: "mk2_gba.jpg",
        category: "Studium",
        caption: "Fach Medienkonzeption - Gebrauchsanweisung eines interaktiken Coca-Cola-Spots"
    };
    var eia1 = {
        imagesrc: "eia1.JPG",
        category: "Studium",
        caption: "Fach Entwicklung Interaktiver Anwendungen - Online-Shop"
    };
    var eia2 = {
        imagesrc: "eia2.JPG",
        category: "Studium",
        caption: ""
    };
    var eia3 = {
        imagesrc: "eia3.JPG",
        category: "Studium",
        caption: ""
    };
    var mg1 = {
        imagesrc: "g1_p.jpg",
        category: "Studium",
        caption: "Fach Mediengestaltung - Permutation"
    };
    var mg2 = {
        imagesrc: "g2_l.jpg",
        category: "Studium",
        caption: "Fach Mediengestaltung - Design eines eigenen Logos"
    };
    var mg3 = {
        imagesrc: "g3_f.jpg",
        category: "Studium",
        caption: "Fach Mediengestaltung - Ferien auf dem Bauernhof (Erg&auml;nzung abstrakter Motive)"
    };
    var mg4 = {
        imagesrc: "g4_b.jpg",
        category: "Studium",
        caption: "Fach Mediengestaltung - Buchumschlagdesign mit Gundformen"
    };
    var bk1 = {
        imagesrc: "bk2_gswt_logo.jpg",
        category: "BK",
        caption: "Projekt zur Neukonzipierung des Schullogos und Druck auf T-Shirts, Taschen etc."
    };
    var bk2 = {
        imagesrc: "bk1_bearb_1.jpg",
        category: "BK",
        caption: "Foto-Bearbeitung"
    };
    var bk3 = {
        imagesrc: "bk1_bearb_2.jpg",
        category: "BK",
        caption: ""
    };
    var bk4 = {
        imagesrc: "bk3_okiag.jpg",
        category: "BK",
        caption: "Wettbewerb zu Design von Sicherheitsplakaten"
    };
    var p1 = {
        imagesrc: "k3_b.jpg",
        category: "Privat",
        caption: ""
    };
    var p2 = {
        imagesrc: "k4_c.jpg",
        category: "Privat",
        caption: ""
    };
    var p3 = {
        imagesrc: "k7_ml.jpg",
        category: "Privat",
        caption: ""
    };
    var p4 = {
        imagesrc: "k5_e.jpg",
        category: "Privat",
        caption: ""
    };
    var p5 = {
        imagesrc: "k11_b.jpg",
        category: "Privat",
        caption: ""
    };
    var p6 = {
        imagesrc: "k9_z.jpg",
        category: "Privat",
        caption: ""
    };
    var p7 = {
        imagesrc: "k10_s.jpg",
        category: "Privat",
        caption: ""
    };
    var p8 = {
        imagesrc: "k2_w.jpg",
        category: "Privat",
        caption: ""
    };
    var p9 = {
        imagesrc: "k6_m.jpg",
        category: "Privat",
        caption: ""
    };
    var p10 = {
        imagesrc: "k1_m.jpg",
        category: "Privat",
        caption: ""
    };
    var p11 = {
        imagesrc: "k12_f.jpg",
        category: "Privat",
        caption: ""
    };
    var p12 = {
        imagesrc: "k14_m.jpg",
        category: "Privat",
        caption: ""
    };
    var p13 = {
        imagesrc: "k15_b.jpg",
        category: "Privat",
        caption: ""
    };
    var p14 = {
        imagesrc: "k16_r.jpg",
        category: "Privat",
        caption: ""
    };
    var p15 = {
        imagesrc: "k17_m.jpg",
        category: "Privat",
        caption: ""
    };
    var p16 = {
        imagesrc: "k18_zl.jpg",
        category: "Privat",
        caption: ""
    };
    var contentoverview = [mk1_1, mk1_2, mk1_3, mk1_4, mk1_5, mk1_6, mk1_7, mk1_8, mk1_9, mk1_10, mk1_11, mk1_12, mk1_13,
        mk2, eia1, eia2, eia3, mg1, mg2, mg3, mg4, bk1, bk2, bk3, bk4, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12,
        p13, p14, p15, p16];
    function generateContentOverview() {
        var node = document.getElementById("works");
        var htmlcontent;
        for (var i = 0; i < contentoverview.length; i++) {
            console.log(contentoverview[i].imagesrc, contentoverview[i].category);
            htmlcontent = "";
            htmlcontent += "<div class='contentbox' id='pic-" + i + "'>";
            htmlcontent += "<a href='https://sftp.hs-furtwangen.de/~maierpri/EIA1/Endaufgabe-Portfolio/bilder/";
            htmlcontent += contentoverview[i].imagesrc;
            htmlcontent += "'><img src='bilder/";
            htmlcontent += contentoverview[i].imagesrc;
            htmlcontent += "'></a>";
            if (contentoverview[i].caption != "") {
                htmlcontent += "<div class='captionbox'>";
                htmlcontent += contentoverview[i].caption;
                htmlcontent += "</div>";
            }
            htmlcontent += "</div>";
            node.innerHTML += htmlcontent;
        }
    }
    function categoryFilter(category) {
        for (var i = 0; i < contentoverview.length; i++) {
            var node = document.getElementById("pic-" + i);
            if (contentoverview[i].category == category) {
                console.log("filtering " + category);
                node.style.display = "initial";
            }
            else {
                node.style.display = "none";
            }
        }
    }
    function main() {
        generateContentOverview();
        document.getElementById("studium").addEventListener('click', function () {
            categoryFilter("Studium");
        });
        document.getElementById("bk").addEventListener('click', function () {
            categoryFilter("BK");
        });
        document.getElementById("privat").addEventListener('click', function () {
            categoryFilter("Privat");
        });
    }
    document.addEventListener('DOMContentLoaded', main);
})(Portfolio || (Portfolio = {}));
