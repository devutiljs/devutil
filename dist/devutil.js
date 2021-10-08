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

    // Mathematical functions

    static factorial(n) {
        if (n === 0) {
            return 1;
        }

        return n * DevUtil.factorial(n - 1);
    }
}

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = DevUtil;
}