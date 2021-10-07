'use strict';

class DevUtil {
    static isDefined(variable) {
        return variable !== undefined && variable !== null;
    }

    static isUndefined(variable) {
        return variable === undefined || variable === null;
    }

    static isTrue(variable) {
        return variable === true;
    }

    static isFalse(variable) {
        return variable === false;
    }
}

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = DevUtil;
}