/**
 * @param {*} files (Array Of Files)
 * @returns returns new array containing all images with Imagesource associated with each file.
 */

import previewFile from "./previewFile";

export default function parseFiles (files) {
    const images = [];
    files.forEach((dataImage) => {
      let mainData = previewFile(dataImage);
      images.push(mainData);
    });
    return images;
}