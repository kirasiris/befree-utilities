export function base64toBlob(base64Data?: string): {
    blob: Blob;
    file: File | undefined;
    url: string;
};
