/**
 * 
 * @param {*} file 
 * @returns A new Object Containing imageSrc (Blob Image URL) and the whole file as it is.
 */

export  default function previewFile (file) {
    return { imageSrc: URL.createObjectURL(file), file };
}