import { calculateTimeSincePublished, formatDateWithoutTime } from "../src/datemanipulation.js";
// Default example date
const defaultDate = "2024-11-28T10:00:00Z";
describe('calculateTimeSincePublished', () => {
    test('should format the entered date into readable string', () => {
        const result = calculateTimeSincePublished(defaultDate);
        expect(result).toBe('3 days ago'); // This will always throw error unless we set up the default date to current one
    });
});
describe('formatDateWithoutTime', () => {
    test('should format the entered data into readable string without time', () => {
        const result = formatDateWithoutTime(defaultDate);
        expect(result).toBe('11/28/2024');
    });
});