import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const filePath = path.join(__dirname, 'files/script.js');

    const childProcess = spawn('node', [filePath, ...args]);

    process.stdin.on('data', (data) => {
        child.stdin.write(data);
    });

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });


};

spawnChildProcess( ['child', 'omega']);