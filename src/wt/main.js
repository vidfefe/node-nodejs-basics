import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import path, { join } from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const promisesArr = [];

const createWorker = (i) => {
    return new Promise((resolve) => {
      const worker = new Worker(join(__dirname, 'worker.js'), {
        workerData: 10 + i,
      });
  
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });
  };

const performCalculations = async () => {
    const threadsNum = os.availableParallelism();
    for (let i = 0; i < threadsNum; i++) {
        promisesArr.push(createWorker(i));
    }
    Promise.all(promisesArr)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
};

await performCalculations();