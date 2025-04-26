import fs from 'fs';
import path from 'path';

const create = async () => {
    const filePath = path.join('src', 'fs', 'files', 'fresh.txt');

    fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' }, (err) => {
        if (err) {
          throw new Error('FS operation failed');
        }
      });
};

await create();