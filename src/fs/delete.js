import path from 'path';
import fs from 'fs/promises';

const remove = async () => {
    const filePath = path.join('src', 'fs', 'files', 'fileToRemove.txt');

    try {
        await fs.unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();