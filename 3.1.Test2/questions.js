let CreationTableauLangages =  () => {
  const array =[]
  array.push("Html", "CSS", "Java", "PHP")
  return array
}

let CreationTableauNombres =  () => {
const array =[]
array.push(0, 1, 2, 3, 4, 5 )
return array
}

let RemplacementElement =  (langages) => {
    langages.splice(2,1,'Javascript')
    return langages
}

let AjoutElementLangages =  (langages) => {
 langages.push("Ruby","Python") 
 return langages
}

let AjoutElementNombres =  (nombres) => {
 nombres.unshift(-2, -1)
 return nombres
}

let SuppressionPremierElement =  (langages) => {
    langages.shift()
    return langages
}

let SuppressionDernierElement =  (langages) => {
    langages.pop()
    return langages
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reg=new RegExp("[,;]+","g");
    const array =reseaux_sociaux_chaine.split(reg)
    return array
}

let ConversionTableauChaine =  (langages) => {
    let answer = langages.toString()
 return answer
}

let TriTableau =  (reseaux_sociaux) => {
 return reseaux_sociaux.sort()
}

let InversionTableau =  (reseaux_sociaux) =>{
 return reseaux_sociaux.reverse()
}
