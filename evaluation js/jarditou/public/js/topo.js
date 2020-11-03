//---------Tout d'abord j'ai crée un fichier .js qui regroupe tous les exercices-----//
// de manière à ce que ce soit plus lisible, je vais commenter chaque partie//
// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
var bt1 = document.getElementById("B1");
// on crée une variable pour appeler un élément de la base html que j'ai créee on le nomme B1
bt1.addEventListener("click", B1); // on crée une variable qui va amener à un bouton qui lorsque l'on clique dessus se déclenche et amène à une fonction
var bt1_ = document.getElementById("B1_");
bt1_.addEventListener("click", B1);
// on commence avec la fonction B1
function B1() {
    document.getElementById("titre").textContent = "âge et nombre d'anciens";
    document.getElementById("PAR1").textContent = "Nous allons dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).Nous allons vous demander de rentrer des ages les uns à la suite des autres, quand vous aurez terminé, rentrez l'age d'une personne centenaire.";
    // On détermine l'énoncé par deux parties, le titre puis l'énoncé, avec la technique textContent, ce qui va permettre d'afficher les élements sur la page html
    An(1);
    document.getElementById("result").textContent = "";

    var com1 = document.getElementById("com1");
    com1.addEventListener("click", op1); // on crée un nouveau bouton qui va amener à une nouvelle fonction sur l'énoncé
}

function op1() { // on va créer une fonction avec des conditions booléeenes  avec les action cond

    let jeunes = moyens = vieux = 0;
    do {
        let age = parseInt(prompt("Entrez votre âge (si > 99 termine): ",
            "0"), 10);
        let ajeune = age < 20;
        let avieux = age > 40;
        let amoyens = age > 20 && age < 40; // j'utilise && pour mettre la condition entre 20 et 40
        centenaire = age > 99; // les centenaires sont  supérieurs à la valeur 99
        jeunes += (ajeune ? 1 : 0); // j'utilise une condition vraie avec le ? en boléen si vraie = 
        moyens += (amoyens ? 1 : 0);
        vieux += (avieux ? 1 : 0);
    } while (!centenaire) // tant que l'on n'entre pas le chiffre supérieur au centenaire , la boucle continue à l'infini et on compte le nombre
    document.getElementById("result").innerHTML = "Il y a " + jeunes + " jeunes, " + moyens + " moyens, " +
        vieux + " vieux (dont un centenaire)"; // ceci permet d'afficher les éléments au fichier html que j'ai modifié avec un css pour le style
}

//------------------------------------------//

// je repars sur le même système pour la fonction numéro deux , on va appeler le bouton deux

var bouton2 = document.getElementById("B2");
bouton2.addEventListener("click", B2);
var bouton2md = document.getElementById("B2_");
bouton2md.addEventListener("click", B2);

function B2() { // petite différence, le texte devient un peu lourd donc au lieu de faire un textcontent ,je fais un innerHTML pour permettre les sauts de lignes

    document.getElementById("titre").textContent = "Table de multiplication";
    document.getElementById("PAR1").innerHTML = `Ecrivez une fonction qui affiche une table de multiplication <br>
Votre fonction doit prendre un paramètre qui permet d 'indiquer quelle table afficher`;
    An(2);
    document.getElementById("result").textContent = ""; // le resultat va s'afficher directement entre les ""

    var com2 = document.getElementById("com2"); // un lien pour le bouton demarrer2
    com2.addEventListener("click", Go2);
}
// on va vers la nouvelle  fonction deux
function Go2() {
    var x = window.prompt("Saisissez un nombre entier"); // on va créer un prompt pour transformer les entrées en entiers
    //on va créer une variable simple
    var i;

    for (i = 0; i <= 10; i++) { // on va proposer une boucle simple pour retourner à la ligne et écrire dans le html 

        document.getElementById("result").innerHTML += x + ' X ' + i + ' = ' + x * i + "<br>";

    }
    document.getElementById("titre").textContent = "Table de multiplication de " + x; // mettre

    document.getElementById("com2").textContent = "commencer";
}
//--------------------------------------//	
var bouton3 = document.getElementById("B3");
bouton3.addEventListener("click", B3);
var bouton3md = document.getElementById("B3_");
bouton3md.addEventListener("click", B3);

function B3() {
    document.getElementById("titre").textContent = "recherche d'un prénom";
    document.getElementById("PAR1").textContent = "Nous avons un tableau de prénoms, quand vous trouverez un prénom dans le tableau, il sera retiré.Nous allons vous demander de rentrer un prénom, nous allons voir si il existe dans le tableau puis le retirer de celui - ci.(Recommencer, remet le tableau à son état initial, Chercher ouvre la fenêtre pour entrer un prénom à chercher dans le tableau)";
    An(3);
    document.getElementById("result").textContent = ""; // le resultat va s'afficher directement entre les ""

    var com3 = document.getElementById("com3"); // un lien pour le bouton demarrer2
    com3.addEventListener("click", Go3);
}
// on va vers la nouvelle  fonction deux
//-----------------------------------------------//	
function Go3() {

    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var n = window.prompt("Saisissez un prénom");

    var check = tab.includes(n);
    if (check) {
        tab = tab.filter(item => item !== n)

        document.getElementById("result").innerHTML = tab;
        document.getElementById("com3").textContent = "REcommencer";

    } else {
        window.alert("Veuillez entrer un prénom par exemple--Audrey");
    }

}

//---------------------------------------------------//

//-----------------------------------------------//	
var bouton4 = document.getElementById("B4");
bouton4.addEventListener("click", B4);
var bouton4md = document.getElementById("B4_");
bouton4md.addEventListener("click", B4);

function B4() {
    document.getElementById("titre").textContent = "Total d'une commande";
    document.getElementById("PAR1").textContent = "A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT ";

    An(4);
    document.getElementById("result").textContent = "";
    var com4 = document.getElementById("com4");
    com4.addEventListener("click", Go4);
}

function Go4() {





    var PU = window.prompt("Saisissez le prix unitaire du produit");
    var QTECOM = window.prompt("Saisissez la quantité commandée du produit"); // on entre tout simplement les divers élements
    TOT = PU * QTECOM; // on calcul le total par le prix unitaire et la quantité
    var PORT = 0;
    var REM = 0;
    if (TOT >= 100 && TOT <= 200) { // simple condition pour permettre de calculer la remise entre les valeurs 100 et 200
        REM = TOT * 0.05;
    } else if (TOT > 200) { // même chose pour les valeurs au dessus de 200
        REM = TOT * 0.1;
    }
    TOT = TOT - REM;
    if (TOT <= 500) { // idem pour 500   
        PORT = TOT * 0.02;
        if (PORT < 6) { // ici on explique que si les frais de ports seront toujours équivalents à 6 en minimum
            PORT = 6;
        }
    }
    TOT = TOT + PORT; // le total est égal au total +frais de ports
    var p = "Prix unitaire : " + PU + "€<br>Quantité : " + QTECOM + "<br>Sous-Total avant remise : " + (Math.round(TOT - REM)) + "€<br>Remise : " + REM + "€<br>Frais de port : " + PORT + "€<br>Total à payer : " + (Math.round(TOT)) + "€"; // J'ai crée une variable pour afficher directement le résultat en fonction des éléments entrés.

    document.getElementById("result").innerHTML = p; // on affiche ici le résultat sur le html tout simplement



    // on passe dorénavant à jarditou.com
    // mais avant une fonction qui affiche et règle les boutons

}

function An(bouton) {
    document.getElementById("com1").classList.add('d-none');
    document.getElementById("com2").classList.add('d-none');
    document.getElementById('com3').classList.add('d-none');
    document.getElementById("com4").classList.add('d-none');
    switch (bouton) { // on utilise le switch 
        case 1: // j'ai trouvé cette astuce sur un forum américain 
            document.getElementById("com1").classList.remove('d-none'); // la fonction d-non explique que le bouton disparaît 
            break;

        case 2:
            document.getElementById("com2").classList.remove('d-none');
            break;
        case 3:
            document.getElementById('com3').classList.remove('d-none');
            break;
        case 4:
            document.getElementById("com4").classList.remove('d-none');
            break;
    }
} //à vérifier quelques erreurs, je ne comprends pas l'énoncé de l'exercice 3.Dois je faire une boucle afin que tous les noms disparaissent?