import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hash = createHash('SHA256');

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const fileStream = fs.createReadStream(filePath);
    fileStream.on('data', chunk => {
        console.log(hash.update(chunk).digest('hex'));
    });
};

await calculateHash();