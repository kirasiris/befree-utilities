declare function base64toBlob(base64Data: string): { blob: Blob, file?: File, url: string };

export { base64toBlob };