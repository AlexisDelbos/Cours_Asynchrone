/* function f1(){
    console.log("Bonjour monde");
} */
/* function f2(name){
    console.log("Bonjour", name);
} */
/* function f3(number){
    return number**2;
} */
/* function f4(double){
    return double*2;
} */
/* let tablo = [4, 10, 20, 30, 40, 50, 60];
function tabo(){
    let tabloReverse = [];
    for (let i = tablo.length-1 ; i >= 0 ; i-=1){
        tabloReverse.push(tablo[i]);
    }
    console.log(tabloReverse);
} */
/* function t4(number){
    let result = 0 ;
    for (let i = 1; i <= number; i++){
        result += i;    
    }
    console.log(result); 
    return result;
}
t4(50); */
/* function flemme(ok){
    ok *=1 ;
    if(ok >= 0){
        console.log(ok**2);
    } else {
        return 1;
    }
} */
/* function flemme(ok){
    ok *= 1 ;
    if(isNaN(ok)){
        return 1;
    } else {
        console.log(ok ** 2);
    }
} */
/* function yunn(design){
    design *= 1 ;
    if(isNaN(design)){
        console.log(5**2);
    } else {
        console.log(design ** 2);
    }
} */
/* function popyx(number){
    console.log(number**2);
} */

// EXO CLASSES //

/* class Personne{
    constructor(sPrenom, sNom){
        this.prenom = sPrenom;
        this.nom = sNom;
    }

    get sePresenter() {
        console.log (`Je m'appelle ${this.prenom} ${this.nom}`);
    }
}*/
/* function Chien(sNom, sRace){
    this.nom = sNom;
    this.race = sRace;
}

Chien.prototype.aboyer = function() {
    console.log(`Woof ! Je suis ${this.nom} et je suis un ${this.race}.`);
    }
    */
/* class Rectangle{
    constructor(sHauteur, sLargeur){
        this.hauteur = sHauteur;
        this.largeur = sLargeur;
    }

    calculerSuperficie() {
        return this.hauteur * this.largeur;
    }

    get superficie() {
        console.log(`La superficie du rectangle est de ${this.calculerSuperficie()}.`);
    }

    calculerPerimetre(){
        return (this.hauteur * 2) + (this.largeur*2);
    }

    get perimetre() {
        console.log(`Le perimetre du rectangle est de ${this.calculerPerimetre()}.`);
    }
} */
/* class Vehicule {
    constructor(sCouleur, sPorte) {
        this.couleur = sCouleur;
        this.porte = sPorte;
    }
}

class Voiture extends Vehicule {
    constructor(sMarque, sCouleur, sPorte) {
        super(sCouleur, sPorte);  // Correction des noms de variables sCouleur et sPorte
        this.marque = sMarque;     // Correction du nom de variable sMarques à sMarque
    }

    get informations() {
        console.log(`La voiture est ${this.couleur}, elle possède ${this.porte} portes et c'est une voiture ${this.marque}.`);
    }
}

const voiture1 = new Voiture("Peugeot", "rouge", 5);  // Correction de l'ordre des arguments
voiture1.informations; */

// Exo FETCH // inner injecter, outer retirer

/* // Sélectionne l'élément HTML avec la classe "apiContact" et le stocke dans la variable apiDiv
const apiDiv = document.querySelector('.apiContact');

// Affiche les attributs de l'élément apiDiv dans la console
console.log(apiDiv.attributes);

// Fonction asynchrone qui effectue une requête à l'API Pokémon
const contactApi = async () => {
    // Effectue une requête fetch pour obtenir les données de l'API
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    
    // Transforme les données en format JSON
    const dataTransformed = await data.json();
    
    // Initialise la liste des résultats dans l'élément apiDiv avec une balise de liste non ordonnée
    apiDiv.innerHTML = "<ul>"

    // Parcourt la liste des résultats de l'API
    for (let index = 0; index < dataTransformed.results.length; index++) {
        // Récupère chaque élément de la liste des résultats
        const element = dataTransformed.results[index];
        
        // Effectue une requête fetch pour obtenir des informations détaillées du Pokémon
        const dataImg = await fetch(element.url);
        const dataImgTransformed = await dataImg.json();
        
        // Affiche l'URL de l'image du Pokémon dans la console
        console.log(dataImgTransformed.sprites.front_default);

        // Modifie le contenu de l'élément apiDiv en ajoutant le nom du Pokémon suivi d'une balise d'image et du nom dans une balise de liste
        apiDiv.innerHTML = apiDiv.outerHTML + "<li>" + "<img src='"+dataImgTransformed.sprites.front_default+"'/>" + element.name + "</li>";  

        // Affiche le texte actuel de apiDiv dans la console
        console.log(apiDiv.outerText); 
    }

    // Termine la liste non ordonnée dans l'élément apiDiv
    apiDiv.innerHTML = apiDiv.outerHTML + "</ul>";
}

// Appelle la fonction contactApi pour exécuter la requête API
contactApi();*/

// Exo Prompt //

/* Prompt
// let nom = prompt("Quel est ton nom ?");
let old;
// console.log(nom,old);

// Initialise la variable 'old'
let old;

// Utilise une boucle 'while' pour continuer à demander l'âge tant que 'old' n'est pas un nombre
while (isNaN(old)) {
  // Demande à l'utilisateur d'entrer son âge via la boîte de dialogue prompt
  old = prompt("Quel est ton age ?");

  // Vérifie si l'entrée n'est pas un nombre (isNaN renvoie true si ce n'est pas un nombre)
  if (isNaN(old)) {
    // Affiche une alerte si l'entrée n'est pas un nombre
    alert("Erreur!!");
  } else if (parseInt(old) < 18) {
    // Si l'âge est inférieur à 18, affiche une alerte indiquant que la personne est mineure
    alert("Tu es mineur");
  } else {
    // Si l'âge est de 18 ou plus, affiche une alerte différente (ici "PEEEEEPO")
    alert("PEEEEEPO");
  }
}
*/

/* Génère un nombre aléatoire entre 1 et 100 et arrondi à l'entier le plus proche
let nombre = Math.round(Math.random() * 100);

// Variable pour stocker le nombre entré par l'utilisateur
let chiffre;

// Compteur pour suivre le nombre d'essais
let compteur = 0;

// Affiche les valeurs initiales dans la console
console.log(nombre); // Affiche le nombre généré aléatoirement
console.log(chiffre); // Affiche la valeur actuelle de 'chiffre' (initialement undefined)
console.log(compteur); // Affiche la valeur actuelle de 'compteur' (initialement 0)

// Définition de la fonction 'decompteur'
function decompteur() {
  // Boucle 'while' continue tant que le nombre généré aléatoirement n'est pas égal au nombre entré par l'utilisateur
  while (nombre != chiffre) {
    // Demande à l'utilisateur d'entrer un nombre via la boîte de dialogue prompt
    chiffre = prompt(" Donne un nombre entre 1 et 100 " + compteur);

    // Vérifie si l'utilisateur a annulé la partie (clic sur 'Annuler' ou fermeture de la boîte de dialogue)
    if (chiffre == null) {
      alert("Partie annulée");
      return; // Termine la fonction si la partie est annulée
    } else if (compteur == 10) {
      // Si l'utilisateur atteint 10 essais sans deviner le bon nombre, affiche "Looser !"
      alert("Looser !");
    } else if (chiffre > nombre) {
      // Si le nombre entré est supérieur au nombre généré, affiche "Plus bas" et incrémente le compteur
      alert("Plus bas");
      compteur++;
    } else if (nombre == chiffre) {
      // Si le nombre entré est égal au nombre généré, affiche "Bien joué !"
      alert("Bien joué !");
    } else {
      // Si le nombre entré est inférieur au nombre généré, affiche "Plus haut" et incrémente le compteur
      alert("Plus haut !");
      compteur++;
    }
  }
}

// Appel de la fonction 'decompteur'
decompteur();
*/

// Calculatrice

/* let nombreUn = parseFloat(prompt("Donnez moi ton premier nombre"));
let nombreDeux = parseFloat(prompt("Donnez moi ton second nombre"));
let operateur = prompt("Quel est l'operation a effectué? ( + - * / )");

let resultA;

if(!isNaN(nombreUn)&& !isNaN(nombreDeux)){
    switch(operateur){
        case"+": resultA = nombreUn + nombreDeux
        break;
        case"-": resultA = nombreUn - nombreDeux
        break;
        case"*": resultA = nombreUn * nombreDeux
        break;
        case"/": resultA = nombreUn / nombreDeux
        break;
        default:alert("Attention erreur");
    }

} else{
    alert("Il semble y avoir une erreur dans les nombres");
}

if (!isNaN(resultA)){
    alert(resultA);
}*/

/*
let nombreUn = Math.round(Math.random() * 10);
let nombreDeux = Math.round(Math.random() * 10);
let nombreTrois = nombreUn * nombreDeux;
let resultA 


while(resultA != nombreTrois){
    resultA = prompt(`Quel est le resultat de   ${nombreUn} *  ${nombreDeux}`);
    if(resultA == nombreTrois){
        alert("Bien joué");
    } else{
        alert("Raté");
    }
}
*/

/* let paragraphe = document.getElementsByTagName('p');
console.log("la collection HTML", paragraphe);

console.log("le 4eme p", paragraphe[3]);

let classIncr = document.getElementsByClassName('incr');
*/

/* document.body.style.backgroundColor = "#587465";

const newImgn1 = document.createElement('img');
newImgn1.src = '/Exo_JS/Image.jpg';
document.body.append(newImgn1);

const newH1 = document.createElement('h1');
newH1.innerText = "John Delavega" ;
document.body.append(newH1);

const newP1 = document.createElement('p1');
newP1.innerHTML = "<p> 25 </p>";
document.body.append(newP1);

const start = new Date(Date.now());

console.log(start);
console.log("On est le",start.toLocaleDateString())
document.body.append(("On est le",start.toLocaleDateString()));

const newP3 = document.createElement('p3');
newP3.innerHTML = "<p> true </p>"
document.body.append(newP3); */



/* const newH1 = document.createElement('h1');
newH1.innerText = "John Delavega" ;
document.body.append(newH1);
newH1.addEventListener('click',() =>{
    const newImg2 = document.createElement('img');
    newImg2.src = '/Exo_JS/pepe-dance.gif';
    document.body.append(newImg2);
})  */

/* Exo 1 & 2 Evenements 
const title1 = document.createElement('h1');
title1.innerHTML = "<div> D.O.M Events </div>" ;
document.body.append(title1);


title1.addEventListener('click', () =>{
    title1.innerHTML = "<div> DOM EVENEMENTS </div>";
})
// Exo 2 Ajouter Classe

const bouton1 = document.createElement('button');
bouton1.innerHTML = "<button>Ajouter Classe</button>";
bouton1.style.color = 'White';
document.body.append(bouton1);

bouton1.addEventListener('click',() =>{
    title1.style.color = 'green';
    title1.style.backgroundColor = "yellow";
})

// Exo 2 Bouton supprimer

const bouton2 = document.createElement('button');
bouton2.innerHTML = "<button>Supprimer Classe</button>";
bouton2.style.backgroundColor = 'red';
document.body.append(bouton2);

bouton2.addEventListener('click',() =>{
    title1.classList.remove('title1');
    title1.style.color = '';
    title1.style.backgroundColor = '';
})

// Exo 2 Toogle 
const bouton3 = document.createElement('button');
bouton3.innerHTML = "<button>Toogle Classe</button>";
bouton3.style.backgroundColor = 'red';
document.body.append(bouton3);

bouton3.addEventListener('click',() =>{
    title1.classList.toggle("visible");
});
*/
/* Exo 3 Image Click

function creerImage(event){
    const x = event.clientX;
    const y = event.clientY;

const nouvelleImage = new Image();
nouvelleImage.src = '/Exo_JS/pepe-dance.gif';

nouvelleImage.style.position = 'absolute';
nouvelleImage.style.top = `${y}px`;
nouvelleImage.style.left = `${x}px`;
document.body.appendChild(nouvelleImage);
}
document.addEventListener('click', creerImage)
*/
/* Exo 4 
const champ1 = document.createElement('input');
champ1.innerHTML = "<input type='text' placeholder='coucou ça va?'>";
document.body.append(champ1);
champ1.addEventListener('focus', ()=>{
    champ1.style.backgroundColor = 'blue';
    champ1.style.color = 'white';
})
champ1.addEventListener('blur', ()=>{
    champ1.style.backgroundColor = 'white'
    champ1.style.color = 'black'
}) */

const images = document.getElementsByClassName("imageHQ");

const fleche = Array.from(images);

fleche.map(img => {
    img.addEventListener('load',() =>{
        console.log(`${img.alt} vient de charger`);
    });    
})
