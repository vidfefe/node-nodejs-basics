import path from 'path';
import fs from 'fs/promises';

const rename = async () => {
    const oldPath = path.join('src', 'fs', 'files', 'wrongFilename.txt');
    const newPath = path.join('src', 'fs', 'files', 'properFilename.md');

    try{
        await fs.access(oldPath);

        try{
            await fs.access(newPath);
            throw new Error('FS operation failed');
        } catch (err) {
            if( err.code === 'ENOENT'){
                await fs.rename(oldPath, newPath);
            } else {
                throw new Error('FS operation failed');
            }
        }

    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await rename();