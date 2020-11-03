var check = document.getElementById('envoie'); //on bloque l'envoi -- on chec l'envoi avant tout

check.addEventListener("click", function verif(event) // on crée une métavariable en récupérant le var check-- j'ai vu cette idée sur un forum anglais
    {

        var mail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/; // regex anglais pour les mails 
        var ddn = /(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/; // regex pour la date de naissanced
        var cp = /(^[0-9]{5}$)|^$/;
        var adr = /(^[0-9]+[a-zA-Z-\s]+$)|^$/; // obligation d'un numero puis d'une 
        var villes = /(^[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)|^$/; // obligation de mettre des caractères et non des entiers
        var alpha = /(^[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/; // regex pour les alpha numérique j'ai modifié la maj obligatoire
        //--------------------------------------------------------------n
        var nom = document.getElementById("nom").value; // on récupère les id de chaque élements html
        var prenom = document.getElementById("prenom").value;
        var sexe = document.getElementById("femme").checked;
        var sexe2 = document.getElementById("homme").checked;
        var date = document.getElementById("date").value;
        var codepost = document.getElementById("codepost").value;
        var adresse = document.getElementById("adresse").value;
        var ville = document.getElementById("ville").value;
        var email = document.getElementById("mail").value;
        var sujet = document.getElementById("sujet").value;
        var accept = document.getElementById("accept").checked;
        var question = document.getElementById("question").value;

        if (!alpha.test(nom)) {
            document.getElementById("errName").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Mettez votre nom</h6>";

            event.preventDefault();
        } else {
            document.getElementById("errName").textContent = "";
        }
        if (!alpha.test(prenom)) {
            document.getElementById("errPrenom").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Vous avez oublié votre prénom</h6>";
            event.preventDefault();
        } else {
            document.getElementById("errPrenom").textContent = "";
        }

        if (sexe == false && sexe2 == false) {
            document.getElementById("errSexe").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez choisir un Sexe!</h6>";
        } else {
            document.getElementById("errSexe").textContent = "";
        }
        if (!ddn.test(date)) {
            document.getElementById("errDate").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Date de naissance non conforme !</h6>";
            event.preventDefault();
        } else {
            document.getElementById("errDate").textContent = "";
        }
        if (!cp.test(codepost)) {
            document.getElementById("errCP").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Code postal erroné </h6>";
            event.preventDefault();
        } else {
            document.getElementById("errCP").textContent = "";
        }
        if (!adr.test(adresse)) {
            document.getElementById("errAdr").textContent = "Adresse non conforme";
            event.preventDefault();
        } else {
            document.getElementById("errAdr").textContent = "";
        }
        if (!villes.test(ville)) {
            document.getElementById("errVille").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez entrer une ville </h6>";
            event.preventDefault();
        } else {
            document.getElementById("errVille").textContent = "";
        }
        if (!mail.test(email)) {
            document.getElementById("errMail").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Vous avez oublié votre email @ !</h6>";
            event.preventDefault();
        } else {
            document.getElementById("errMail").textContent = "";
        }
        if (sujet == 1) {
            document.getElementById("errSujet").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">veuillez choisir un sujet</h6>";
            event.preventDefault();
        } else {
            document.getElementById("errSujet").textContent = "";
        }
        if (accept != true) {
            document.getElementById("errAccept").innerHTML = " <h6 class=\"alert alert-danger\" role=\"alert\">Veuillez cocher cette case";
            event.preventDefault();
        } else {
            document.getElementById("errAccept").textContent = "";
        }
        if (question == "") {
            document.getElementById("errQuest").innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">posez votre question </h6>";
            event.preventDefault();
        } else {
            document.getElementById("errQuest").textContent = "";
        }
    });
// fin à valider et voir si cela fonctionne
// améliorer le html car erreur de fieldset
//la colonne n'apparaît pas
// modifier les nom car pas assez lisible