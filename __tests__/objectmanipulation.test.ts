import { checkEmptyObject } from "../src/objectmanipulation.js";

describe('checkEmptyObject', () => {
    test("should return true for an empty object", () => {
        const result = checkEmptyObject({});
        expect(result).toBe(true); // Test for an explicitly empty object
      });
    
      test("should return true when no argument is provided (default empty object)", () => {
        const result = checkEmptyObject();
        expect(result).toBe(true); // Test the default parameter
      });
    
      test("should return false for an object with properties", () => {
        const obj = { key: "value" };
        const result = checkEmptyObject(obj);
        expect(result).toBe(false); // Test for an object with properties
      });
    
      test("should return false for inherited properties", () => {
        // Manually extend prototype
        class TestClass {
            ownProperty: string; // Declare property
            constructor() {
                this.ownProperty = "value";
            }
        }

        Object.defineProperty(TestClass.prototype, "inheritedProperty", {
            value: "inherited",
            enumerable: true, // Ensure the property is enumerable
            configurable: true,
            writable: true,
        })

        const instance = new TestClass();
    
        const result = checkEmptyObject(instance);
        expect(result).toBe(false); // Object has its own properties
      });
    
      test("should return true for objects without own properties but with inherited ones", () => {
        const inherited = Object.create({ prototypeProperty: "value" });
        const result = checkEmptyObject(inherited);
        expect(result).toBe(true); // No own properties, only inherited
      });
    
});