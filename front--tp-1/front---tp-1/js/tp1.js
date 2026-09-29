// TP1 Front
//////////////////////////////////////////////////////////////////////
// fonction principale,
// qui dépend d'autres fonctions définies plus loin dans ce fichier...

function runFunction() {
    "use strict";

    exo1(10000);

    exo2_1();
    exo2_2();
    exo2_3();
    exo2_4();

    exo3();

    exo4();
}

//////////////////////////////////////////////////////////////////////

// Exercice 1
function exo1(limit) {
    "use strict";
    for (var i = 4; i<limit;i++) {
        var diviseurs= [];
        for (var n = 1;n<i;n++) {
            if (i%n==0) {
                diviseurs.push(n);
            }
        }
        var somme = 0;
        for (var n of diviseurs) {
            somme = somme + parseInt(n);
        }
        if (somme == i ) {
            window.console.log(i + "est un nombre parfait"); //alert fait un popup du coup je l'ai remplace par window.console.log
        }
    }
}

//////////////////////////////////////////////////////////////////////

// Exercice 2
function exo2_1() {
    "use strict";
    window.console.log("Exercice 2.1");
    // TODO regarder le résultat des calculs de nombres
    //F12 + console
    window.console.log(Number("A")); //NAN
    window.console.log(2 + "12"); //212
    window.console.log(2 + (+"12")); //14
    window.console.log((+"A")); //NaN
    window.console.log(2 * "12"); //24
    window.console.log(2 * "A"); //NaN
    window.console.log(1/0); //Infinity
    window.console.log(1/-0); //-Infinity
}

function exo2_2() {
    "use strict";
    window.console.log("Exercice 2.2");

    // TODO regarder le résultat des opérations avec NaN
    window.console.log(NaN === NaN); //false
    window.console.log(NaN !== NaN); //true
    window.console.log(isNaN(NaN)); //true
}

function exo2_3() {
    "use strict";
    window.console.log("Exercice 2.3");

    // TODO regarder la valeur d'une variable non initialisée
    var mavar;
    window.console.log(mavar);//undefined
}

function exo2_4() {
    "use strict";

    window.console.log("Exercice 2.4");

    // TODO regarder la différence entre null et undefined
    var x;
    var y;
    var xn = null;
    var yn = null;
    window.console.log(x===y); //true
    window.console.log(x===yn); //false
    window.console.log(xn===yn); //true

    window.console.log(x==y); //true
    window.console.log(x==yn); //true
    window.console.log(xn==yn); //true

}

//////////////////////////////////////////////////////////////////////

// Exercice 3

function escapeText(s){ "use strict"; var p = document.createElement('p'); p.textContent = s; return p.innerHTML; }

function appendText(text) {
    "use strict";
    document.getElementById("text").innerHTML += escapeText(text) + "<br>";
}

function exo3() {
    "use strict";

    document.getElementById("text").innerHTML = "";

    appendText("Exercice 3");
    var list = [1, 2, 4];
    // TODO camlListOfArray
    appendText(camlListOfArray(list));


    var palindromes = ["", "a", "BB", "BOB", "ESOPERESTEICIETSEREPOSE"];
    var nonPalindromes = ["Bob", "BABA"];
    for (var i = 0;i<palindromes.length;i++) {
        appendText(estPalindrome(palindromes.at(i).toString()));
    }
    for (var i = 0;i<nonPalindromes.length;i++) {
        appendText(estPalindrome(nonPalindromes.at(i).toString()));
    }

    var esop = "ESOPERESTEICIETSEREPOSE"
    appendText(listeOccurrences("E",esop).toString());

    var testsEmail = ["a@b.fr", "john.doe@firm.co.uk", "somebody@domain"];
    // TODO estEmail

    appendText("TODO : ajoutez le résulat de chaque opération");
}

function camlListOfArray(tableau) {
    "use strict";
    // TODO
    var retour = "["+tableau.toString()+"]";
    return retour;
}

function estPalindrome(texte) {
    "use strict";
    var i = 0;
    for (var j = texte.length-1; i<j;j--) {
        if (texte.charAt(i)!=texte.charAt(j)) {
            return false;
        }
        i++
    }
    return true;
}

function listeOccurrences(search, texte) {
    "use strict";
    var retour = [];

    for (var i = 0; i < texte.length; i++) {
        if (texte[i] === search) {
            retour.push(i);
        }
    }

    return retour;
}


function estEmail(texte) {
    "use strict";
    // TODO
    return true;
}

//////////////////////////////////////////////////////////////////////

// Exercice 4
function exo4() {
    "use strict";
    appendText("Exercice 4");
    // TODO
    appendText("TODO : ajoutez le résulat de chaque opération")
}


