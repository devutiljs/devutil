'use strict';

class DevUtil {
    // is variable defined
    static isDefined(variable) {
        return variable !== undefined && variable !== null;
    }

    // is variable undefined
    static isUndefined(variable) {
        return variable === undefined || variable === null;
    }

    // is variable equals to 'true'
    static isTrue(variable) {
        return variable === true;
    }

    // is variable equals to 'false'
    static isFalse(variable) {
        return variable === false;
    }


    /*
    Mathematical functions
    */

    // factorial of a number 'n'
    static factorial(n) {
        if (n === 0) {
            return 1;
        }

        return n * DevUtil.factorial(n - 1);
    }

    // calculate the area of a triangle on three sides
    static triangleAreaThreeSides(side1, side2, side3) {
        if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
            return 0;
        }

        const semiPerimeter = (side1 + side2 + side3) / 2;

        return Math.sqrt(
            semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3)
        );
    }

    // convert kilometers to miles
    static kilometersToMiles(kilometers) {
        if (kilometers <= 0) {
            return 0;
        }

        return kilometers * 0.621371;
    }

    // check if a number is odd
    static isOdd(number) {
        return number % 2 !== 0;
    }

    // check if a number is even
    static isEven(number) {
        return number % 2 === 0;
    }
}

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = DevUtil;
}