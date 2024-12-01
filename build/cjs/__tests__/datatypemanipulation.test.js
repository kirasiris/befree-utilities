"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datatypemanipulation_js_1 = require("../src/datatypemanipulation.js");
describe('base64toBlob', () => {
    test('should convert base64-enconded string to blob', () => {
        const base64string = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
        const result = (0, datatypemanipulation_js_1.base64toBlob)(base64string);
        // Assert blob properties
        expect(result.blob).toBeInstanceOf(Blob);
        expect(result.blob.size).toBe(85); // Ensure the size is correct
        expect(result.blob.type).toBe(''); // The blob type defaults to an empty string
        // Assert file properties (if file exists)
        if (result.file) {
            expect(result.file).toBeInstanceOf(File);
            expect(result.file.size).toBe(85); // Ensure the file size matches the blob size
            expect(result.file.type).toBe('image/jpeg'); // Default file type
            expect(result.file.name).toBe('file_name.jpg'); // Default file name
            expect(typeof result.file.lastModified).toBe('number'); // Ensure lastModified is a number        
        }
        else {
            fail('File object is undefined');
        }
        // Assert URL property
        expect(typeof result.url).toBe('string'); // Ensure URL is a string
        expect(result.url.startsWith('blob:')).toBe(true); // Ensure URL starts with 'blob:'
    });
});
