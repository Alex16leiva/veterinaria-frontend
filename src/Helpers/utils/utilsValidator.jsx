export class utilsValidator {
    static isWhiteSpace = str => {
        return !str || /^\s*$/.test(str);
    };

    static isNullOrEmpty = text => {
        return (
            this.isUndefined(text) ||
            this.isNull(text) ||
            text === '' ||
            this.isWhiteSpace(text)
        );
    };

    static isUndefined = obj => {
        return (typeof (obj) === 'undefined');
    }

    static isNull = obj => {
        return obj === null;
    }
}