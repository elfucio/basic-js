class VigenereCipheringMachine {
    constructor(modification){
        this.modification = modification;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error();
        let result = '';
        let messageStr = message.toUpperCase();
        let keywordStr = key.toUpperCase();
        let char = 0;

        for (let i = 0; i < messageStr.length; i++) {
            if (messageStr.charCodeAt(i) > 64 && messageStr.charCodeAt(i) < 91) {   
                if (char >= keywordStr.length) {
                    char = 0;
                }                    
                    result += String.fromCharCode(((messageStr.charCodeAt(i) + keywordStr.charCodeAt(char++)) % 26) + 65);  
            }
            else {
                result += messageStr[i];
            } 

            if (this.modification === false) {
                return result.split('').reverse().join('');
            }
        }
        return result;
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) throw new Error();
        let result = '';
        let encryptedStr = encryptedMessage.toUpperCase();
        let keywordStr = key.toUpperCase();
        let char = 0;

        for (let i = 0; i < encryptedStr.length; i++) {
            if (encryptedStr.charCodeAt(i) > 64 && encryptedStr.charCodeAt(i) < 91) {   
                if (char >= keywordStr.length) {
                    char = 0;
                }
                result += String.fromCharCode(((encryptedStr.charCodeAt(i) + 26 - keywordStr.charCodeAt(char++)) % 26) + 65);                       
            }
            else {
                result += encryptedStr[i];
            }   
        }

        if (this.modification === false) {
            return result.split('').reverse().join('');
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;