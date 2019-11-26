/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e");
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
 let texte=texte1+texte2;
 return texte;
}
let afficherCar5 =  (texte) => {
 return texte[1];
}
let afficher9Car =  (texte) => {
    return texte.substr(0,9);
}
let majusculeString =  (texte) => {
 return texte.toUpperCase();

}
let minusculeString =  (texte) => {
 return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
 if (typeof texte=='string'){
     return true;
 }
}

let AfficherExtensionString =  (texte) => {
    let split =texte.split(/\.(?!.*\.)/);
    return split[1];
}
let NombreEspaceString =  (texte) => {
    let spc =texte.split(' ').length - 1;
    return spc
}
let InverseString =  (texte) => {
 return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
 return Math.pow(x,y)
}
let valeurAbsolue =  (nombre) => {
 return Math.abs(nombre)
}
let valeurAbsolueArray =  (array) => {
    const answer=[]
    for(let i=0; i<array.length;i++){
    answer.push(Math.abs(array[i]))
    }
    return answer
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * (rayon * rayon));
}
let hypothenuse =  (ab, ac) => {
 return Math.hypot(ab,ac)
}
let calculIMC =  (poids, taille) => {
 let taille1 = taille * taille;
 let imc = poids/taille1;
 return parseFloat(imc.toFixed(2));

}
