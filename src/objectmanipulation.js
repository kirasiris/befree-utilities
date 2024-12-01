// Description: Checks if an object is empty (i.e., has no own properties) and returns true if it is empty, otherwise false.
// Input example:
//   checkEmptyObject({}); // Empty object
//   checkEmptyObject({ key: "value" }); // Non-empty object
// Output example:
//   true fo the empty object
//   false for the object with properties
const checkEmptyObject = (obj = {}) => {
	for (const prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			return false;
		}
	}

	return true;
};

export { checkEmptyObject };
