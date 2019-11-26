let selectElementsStartingWithA = (array) => {
    return array.filter(word=>word[0]=== "a")
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(word => word[0].match(/[aeiouy]/i));
}

let removeNullElements = (array) => {
    return array.filter(word=>word !==null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(word=>word !==null && word !==false);
}

let reverseWordsInArray = (array) => {
    const newArray= array.map(ellement=> ellement.split("").reverse("").join(""))
    return newArray ;
}

let everyPossiblePair = (array) => {
    array.sort();
    let answer = [];
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        answer.push([array[i], array[j]]);
      }
    };
    return answer
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
array.sort(function(a, b){
    var lastA = a.charAt(a.length - 1);
    var lastB = b.charAt(b.length - 1);
    if (lastA > lastB) {
        return 1;
    } else if (lastA < lastB) {
        return -1;
    } else {
        return 0;
    }
});
return array
};

let getFirstHalf = (string) => {
    return string.substring(0, Math.round(string.length / 2));
}
let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
        const Palindrom = array.filter(element=> element ===element
                                                                .split('')
                                                                .reverse()
                                                                .join(''));
    return Palindrom.length
}

let shortestWord = (array) => {
    const newArray = array.sort((a, b) => a.length - b.length);
  return newArray[0];
}

let longestWord = (array) => {
    return array.sort(function(a, b) {return b.length - a.length})[0];;
}

let sumNumbers = (array) => {
    let sum = 0;for (var i = 0; i < array.length; i++) {
        sum += array[i]
      };
      return sum
}

let repeatElements = (array) => {
     return array.concat(array)
}

let stringToNumber = (string) => {
    let nbr = parseInt(string);
    return nbr
}

let calculateAverage = (array) => {
    const sum = array.reduce((acc, curr) => (acc += curr));
    const result = sum / array.length;
    return result;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0, 6)
}

let convertArrayToObject = (array) => {
    let keys = [];  
    let values = [];
    for (let i = 0; i < array.length; i += 2) {
        keys.push(array[i]);
    }
    for (let i = 1; i < array.length; i += 2) {
        values.push(array[i]);
    }

    let Obj = {};
    keys.forEach((key, i) => (Obj[key] = values[i]));
    return Obj;
}

let getAllLetters = (array) => {
    const letters = array.map(element => element.split(""));
    const ofLetters = letters.flat();
    const setofofLetters = new Set(ofLetters);
    const ArrayOfLetters = Array.from(setofofLetters);
    const sortedArrayOfLetters = ArrayOfLetters.sort();
    return sortedArrayOfLetters;
    }
let swapKeysAndValues = (object) => {
    let obj = Object.values(object)
    let value = Object.keys(object)
    const newObj= {};
    obj.forEach((obj,i)=>(newObj[obj]=value[i]));
    return newObj
}

let sumKeysAndValues = (object) => {
    const key = Object.keys(object).map(Number);
  const value = Object.values(object);
  let sumValue = value.reduce((acc, val) => (acc += val));
  let sumKey = key.reduce((acc, key) => (acc += key));
  return sumValue + sumKey;
}

let removeCapitals = (string) => {
    let letters = string.split("");
    let filtered = letters.filter(letter => letter.match(/[a-z ]/))
    const filteredString = filtered.join("");
    return filteredString;
}

let roundUp = (number) => {
    let result =Math.ceil(number);
    return result;
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("fr-FR")
}
let getDomainName = (string) => {
    const domain = string.split("@")[1];
  const filtered = domain.split(".");
  const arrayFiltered = filtered.filter(
    el => el != "com"
  );
  const joinedArry = arrayFiltered.join(".");
  return joinedArry;
}

let titleize = (string) => {
    const titleArray = string.split(" ");
    const endArray = [];

    titleArray.forEach(word => {
    const wordArray = word.split("");
    wordArray[0] = wordArray[0].toUpperCase();
    const JoinedWord = wordArray.join("");
    endArray.push(JoinedWord);
    });

    for (let i = 1; i < endArray.length; i++) {
    if (endArray[i].length < 4) {
        endArray[i] = endArray[i].toLowerCase();
        }
    }
    let joinedArray = endArray.join(" ");

    if (joinedArray.includes(".")) {
        const char = joinedArray.charAt(joinedArray.indexOf(".") + 2);
        joinedArray = joinedArray.replace(char, char.toUpperCase());
    }
  return joinedArray;
}

let checkForSpecialCharacters = (string) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(string)){
        return true;
    }
    else {
        return false;
    }  
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
     let Factorial= n => { 
        if (n === 0) {  
            return 1;  
        } 
        else {  
            return n * Factorial(n - 1 );  
        } 
    }; 
    return Factorial(number) 
};

let findAnagrams = (string) => {
    //auncune solution trouver....
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5/9);
}

let letterPosition = (array) => {
    let Array = array.map(el => el.toLowerCase().charCodeAt() - 96);
  return Array;
}
