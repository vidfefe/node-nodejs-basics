import path from 'path';
import fs from 'fs/promises';

const read = async () => {
    const filePath = path.join('src', 'fs', 'files', 'fileToRead.txt');

    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
    }
    catch {
        throw new Error('FS operation failed');
    }
    
};

await read();