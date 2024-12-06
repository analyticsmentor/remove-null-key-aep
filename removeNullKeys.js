//Logic to remove all the keys from the "content" object that are null, undefined or empty string to avoid validation error on the AEP side.

function removeKeys(obj) {
    for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object') {
            removeKeys(obj[key]);
        }
        if (obj[key] === undefined || obj[key] === null || obj[key] === "") {
            delete obj[key];
        }
    }
}

//calling the removeKeys function..
removeKeys(content);
