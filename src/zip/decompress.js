import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createGunzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const outputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const filePath = path.join(__dirname, 'files', 'archive.gz'); 

    const readStream = fs.createReadStream(filePath);
    const gunzip = createGunzip();
    const writeStream = fs.createWriteStream(outputFilePath);

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();