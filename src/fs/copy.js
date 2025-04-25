import path from 'path';
import fs from 'fs/promises'

const copy = async () => {
    const sourcePath = path.join('src', 'fs', 'files');
    const destPath = path.join('src', 'fs', 'files_copy');

    try {
        const sourceStat = await fs.stat(sourcePath);
        const destExists = await fs.access(destPath).then(() => true).catch(() => false);

        if (!sourceStat.isDirectory() || destExists) {
            throw new Error();
        }

        await fs.cp(sourcePath, destPath, { recursive: true });
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();