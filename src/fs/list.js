import path from 'path';
import fs from 'fs/promises';

const list = async () => {
    const dirPath = path.join('src', 'fs', 'files');

    try {
        const files = await fs.readdir(dirPath);
        console.log(files);
    } catch (err) {
       throw new Error('FS operation failed');
    }
};

await list();