const parseEnv = () => {
    const envVars = process.env;  
    const result = [];

    for (const key in envVars) {
        if(key.startsWith("RSS_")) {
            result.push(`${key}=${envVars[key]}`);
        }
    }

    console.log(result.join("; "));
};

parseEnv();