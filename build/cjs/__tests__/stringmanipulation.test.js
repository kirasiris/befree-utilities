"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringmanipulation_js_1 = require("../src/stringmanipulation.js");
describe('capitalizeWordsInArray', () => {
    test('should capitalize the first letter of each word in the array', () => {
        const result = (0, stringmanipulation_js_1.capitalizeWordsInArray)(["hola", "perros", "xD"]);
        expect(result).toEqual(['Hola', 'Perros', 'xD']); // "xD" should stay unchanged
    });
    test('should return an empty array if the input is an empty array', () => {
        const result = (0, stringmanipulation_js_1.capitalizeWordsInArray)([]);
        expect(result).toEqual([]);
    });
    test('should handle single word input correctly', () => {
        const result = (0, stringmanipulation_js_1.capitalizeWordsInArray)(['hello']);
        expect(result).toEqual(['Hello']);
    });
    test('should not change words with mixed case like "xD"', () => {
        const result = (0, stringmanipulation_js_1.capitalizeWordsInArray)(['xD']);
        expect(result).toEqual(['xD']); // "xD" should remain unchanged
    });
    test('should filter out empty strings', () => {
        const result = (0, stringmanipulation_js_1.capitalizeWordsInArray)(['', 'hello', '', 'world', '']);
        expect(result).toEqual(['Hello', 'World']); // Empty strings should be removed
    });
    test('should handle input with leading or trailing spaces', () => {
        const result = (0, stringmanipulation_js_1.capitalizeWordsInArray)(['  hello', ' world ']);
        expect(result).toEqual(['Hello', 'World']); // Leading/trailing spaces should be trimmed
    });
});
