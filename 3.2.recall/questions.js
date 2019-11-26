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
    array.sort((a, b) => {
    if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
      return -1;
    }
    if (b.charAt(b.length - 1) > a.charAt(a.length - 1)) {
      return 1;
    }

    return 0;
  });
  return array;
};

let getFirstHalf = (string) => {
    return string.substring(0, Math.round(string.length / 2));
}
let makeNegative = (number) => {
    return 'Write your method here';
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
