class DevUtil {
    static isUndefined(variable) {
        return variable === undefined || variable === null;
    }

    static isDefined(variable) {
        return variable !== undefined && variable !== null;
    }

    static isTrue(variable) {
        return variable === true;
    }

    static isFalse(variable) {
        return variable === false;
    }
}