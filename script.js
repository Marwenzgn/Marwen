
Voici un exemple de contenu pour le fichier script.js :

javascript
Copy code
function jouerAuJeu() {
  while (true) {
    alert("Bonjour, vous allez participer à un jeu créé par Zachary, Ayoub et Marwen!");
    alert("Nous vous prions de ne pas chercher des réponses sur internet, pour avoir une expérience plus personnelle.");

    alert("Etape 1: Choisissez un nombre entre 1 et 10.");
    prompt("Appuyez sur 'OK' pour passer à l'étape suivante...");

    alert("Etape 2: Multipliez ce nombre par 3.");
    prompt("Appuyez sur 'OK' pour passer à l'étape suivante...");

    alert("Etape 3: Enlevez 4 au résultat.");
    prompt("Appuyez sur 'OK' pour passer à l'étape suivante...");

    alert("Etape 4: Multipliez le résultat par 2.");
    prompt("Appuyez sur 'OK' pour passer à l'étape suivante...");

    alert("Etape 5: Ajoutez 8.");
    prompt("Appuyez sur 'OK' pour passer à l'étape suivante...");

    alert("Etape 6: Divisez le résultat par votre nombre de départ.");
    prompt("Appuyez sur 'OK' pour passer à l'étape suivante...");

    alert("Etape 7: Pensez maintenant à un objet commençant par la dernière lettre du nombre obtenu.");
    prompt("Appuyez sur 'OK' pour passer à l'étape suivante...");

    alert("Etape 8: Pour complexifier les choses, pensez maintenant à un aliment commençant par la deuxième lettre de votre objet choisi.");
    prompt("Appuyez sur 'OK' pour passer à la dernière étape...");

    alert("Etape 9: Pour rendre les choses encore plus aléatoires, pensez à un pays d'Europe commençant par la cinquième lettre de votre aliment choisi.");
    prompt("Appuyez sur 'OK' pour continuer...");

    var réponse = prompt("Avez-vous votre pays en tête? Si oui, tapez 'oui'. Si non, tapez 'non' ").toLowerCase();

    if (réponse === "oui") {
      var pays = prompt("Votre pays est-t-il la Roumanie? Si oui, tapez 'oui'. Si non, tapez 'non' ").toLowerCase();
      if (pays === "oui") {
        alert("Merci d'avoir joué ! Et essayez d'être moins prévisible la prochaine fois !");
      } else if (pays === "non") {
        alert("Haha je plaisante, votre pays est celui qui détient la plus grande superficie au monde !");
        alert("Merci d'avoir participé, et essayez d'être moins prévisible la prochaine fois !");
      }
    } else if (réponse === "non") {
      alert("Prenez le temps de bien refaire les étapes du jeu, et de ne pas vous tromper !");
      continue;
    } else {
      alert("Réponse invalide. Veuillez entrer 'oui' ou 'non'.");
      var réponse = prompt("Avez-vous votre pays en tête? Si oui, tapez 'oui'. Si non, tapez 'non' ").toLowerCase(); 
    }

    var note = -1;
    while (!(0 <= note && note <= 20)) {
      note = parseFloat(prompt("Sur une échelle de 0 à 20, notez votre expérience de jeu : "));
      if (note < 7) {
        var raison = prompt("Nous sommes désolés que votre expérience n'ait pas été à la hauteur. Nous espérons vous revoir bientôt. Que n'avez-vous pas apprécié dans le jeu ?");
        alert("Merci pour votre retour. Nous en tiendrons compte pour améliorer le jeu. À bientôt !");
      } else if (note < 16) {
        var raison = prompt("Qu'est-ce que vous n'avez pas apprécié dans le jeu ? Votre feedback est précieux pour nous : ");
        alert("Merci pour votre retour. Nous en tiendrons compte pour améliorer le jeu. À bientôt !");
      } else if (note >= 16) {
        alert("Merci d'avoir donné une note élevée ! Nous avons bien aimé votre expérience. À bientôt !");
      } else { 
        alert("Merci d'entrer une note comprise entre 0 et 20");
        note = parseFloat(prompt("Sur une échelle de 0 à 20, notez votre expérience de jeu : "));
      }
    }

    var rejouer = prompt("Voulez-vous rejouer ? Tapez 'oui' pour rejouer ou 'non' pour quitter. ").toLowerCase();
    if (rejouer !== "oui") {
      alert("Merci d'avoir joué ! À bientôt !");
      break;
    } else {
      alert("Recommençons !");
    }
  }
}
