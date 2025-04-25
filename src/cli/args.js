const parseArgs = () => {
    const argsArr = process.argv.slice(2);

    const result = [];

    for ( let i = 0; i < argsArr.length; i += 2 ) {
        const key = argsArr[i].replace('--', '');
        const value = argsArr[i + 1];
        result.push(`${key} is ${value}`);
    }

    console.log(result.join(', '));
};

parseArgs();