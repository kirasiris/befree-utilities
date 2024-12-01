"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeWordsInArray = void 0;
// Description: Take an array of words and returns a new array where each word is capitalized
// Input example: capitalizeWordsInArray(["hello", "world", "JAVASCRIPT", ""]);
// Output example: ["Hello", "World", "Javascript"]
const capitalizeWordsInArray = (wordInArr = []) => {
    return wordInArr
        .map((word) => word.trim()) // Trim each world to avoid leading/trailing spaces
        .map((word) => {
        // Only capitalize the first letter if the word is not in mixed cases such as "xD"
        if (word.length > 1 && word[1] === word[1].toUpperCase()) {
            return word; // Keep mixed-case words as they are
        }
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
        .filter((char) => char.length !== 0); //Remove empty strings
};
exports.capitalizeWordsInArray = capitalizeWordsInArray;
