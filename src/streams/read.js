import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
    readStream.pipe(process.stdout);
};

await read();