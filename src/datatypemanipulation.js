// Description: Converts a base64-encoded string into a binary blob and
// optionally creates a File object and a url for the blob
// Input example: const file = base64toBlob(iVBORw0KGgoAAAANSUhEUgAAAAUA...); // (truncated Base64 string for brevity)
// Output example:
// console.log(file);
// {
//   blob: Blob { size: 522, type: "" }, //  Binary blob representation
//   file: File { name: "fiename.jpg", size: 522, type: "image/jpg" }
//   url: "blob:http://example/com/abc123" // Object Url for the blob
// }
const base64toBlob = (base64Data = "") => {
	let byteCharacters;

	// Check if Buffer is available (for Node.js environments) or fallback to atob (for browser environments)
	if (typeof Buffer !== "undefined") {
		byteCharacters = Buffer.from(base64Data, "base64").toString("binary");
	} else if (typeof atob !== "undefined") {
		byteCharacters = atob(base64Data); // Decode base64 in the browser
	} else {
		throw new Error("Base64 decoding is not supported in this environment");
	}

	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);

	// Create Blob from the byteArray
	const blob = new Blob([byteArray]);

	// Optionally create a File object
	let file;
	if (blob instanceof Blob) {
		file = new File([blob], "file_name.jpg", { type: "image/jpeg" });
	}

	// Create an Object URL for the Blob
	const url = URL.createObjectURL(blob);

	return { blob, file, url };
};

export { base64toBlob };
