// JavaScript source code
"use strict"
   
let radio = ["Anissa de Wejdene", "Love we tears us apart de Joy Division", "Je Marche seul de Jean-Jacques Goldman", "J't'emm�ne au vent de Louise Attaque"];//les diferentes chansons � la radio
let feuxRouges=30;//Le nombre de feux rouges
let nbrtaxis = 0;//nombre de changement de taxi
let santeMentale = 10;//nombre de points de santer mentale
console.log("Salut moi c'est John, je veux rentrer chez moi mais j'ai horreur de Anissa de Wejdene. cette chanson m'insupporte. Si je l'entends je vous paye et je change de taxi.")

for (let i = 0; i < 30; i++) {//je cr�er une boucle pour les 30 feux rouges
    let choixMusique=radio[Math.floor(Math.random()*4)]//La radio choisis la musique parmis les 5 disponibles.
    if (choixMusique == radio[0]) {
        santeMentale--//santeMentale -1
        nbrtaxis++//nbtaxis +1
        console.log("Je vais tout detruire. je hais c'est musique " + choixMusique + ", il reste" + feuxRouges + " feux rouges avant que j'arrive, ma sant� mentale est � " + santeMentale + ".")
        if (santeMentale == 0) {//si la sante mentale de John est � 0 c'est Bye Bye 
            console.log("Aller Bye Bye")
            break//il stop le code ici
        }
 } else {
        console.log("Incroyable, la musique � la radio c'est " + choixMusique + "? Il me reste " + feuxRouges + " feux rouges avant d'arriver chez moi.");
    }

    feuxRouges--;

    if (nbrtaxis >= 5 && feuxRouges === 0) {
        console.log("John a r�ussi � rentrer en " + nbrtaxis + " taxis diff�rents ! Sa sant� est � " + santeMentale + ". Mes go�ts en musique impactent mon porte-monnaie.");
    } else if (nbrtaxis < 5 && feuxRouges === 0) {
        console.log("John est arriv� en " + nbrtaxis + " taxis diff�rents ! Sa sant� mentale est � " + santeMentale + ".");
    }
}