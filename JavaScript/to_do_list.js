// Variable du champ d'insertion
let champ = document.getElementById("champ");
console.log(`champ == ${champ}.`);

// Variable du bouton "Ajouter à la liste"
let bouton = document.getElementById("bouton");
console.log(`bouton == ${bouton}.`);

// Variable de la liste
let liste = document.getElementById("liste");
console.log(`liste == ${liste}.`);

// Variable de tous les <li>
let activités = document.getElementsByTagName("li");


// Fonction pour ajouter une activité dans la liste
function Ajouter()
{
    // Création de l'élément <li>
    let activité = document.createElement("li");

    activité.style.display = "flex";
    activité.style.justifyContent = "space-between";

    // Création de l'élément <span>
    let activitéSpan = document.createElement("span");
    activitéSpan.innerText = champ.value;

    // Création du bouton de suppression
    let suppr = document.createElement("button");

    // Texte et style du bouton de suppression
    suppr.textContent = "X";
    suppr.classList.add("suppr");

    // Fonction du bouton de suppression
    suppr.addEventListener("click", function()
    {
        liste.removeChild(activité);
    })

    // Ajout du texte <span> puis du bouton <button> de suppression à la nouvelle activité <li> (les éléments sont ajoutés de gauche à droite)
    activité.appendChild(activitéSpan);
    activité.appendChild(suppr);

    /*
        <li>
            <span>Activité</span>
            <button>
        </li>
    */

    // Ajout de l'élément <li> dans la liste
    liste.appendChild(activité);
    
    // Fonction pour barrer ou débarrer l'activité
    activitéSpan.onclick = function()
    {
        // Bascule de la classe barrée
        this.classList.toggle("barrée");
    }

    // Remise à zéro du champ
    champ.value = "";
}