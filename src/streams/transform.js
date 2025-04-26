import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunck, encoding, callback) {
            const reversed = chunck.toString().split('').reverse().join('');
            callback(null, reversed);
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();