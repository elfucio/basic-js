module.exports = function transform(arr) {
    let newArr = [];
    
    if (!Array.isArray(arr)) {
        throw new Error ('this is not an array');
    }

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;

            case '--double-next':
                if (i < arr.length - 1) {
                    newArr.push(arr[i + 1]);
                }
                break;

            case '--discard-prev':
                if (newArr.length !== 0) {
                    newArr.pop();
                }
                break;

            case '--double-prev':
                if (i >= 1) {
                    newArr.push(arr[i - 1]);
                }
                break;
                
            default:
                newArr.push(arr[i]);
        }
    }

    return newArr; 

};