/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = (object, keys) => keys.reduce((composedObject, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        composedObject[key] = object[key];
    }
    return composedObject;
}, {});

module.exports = pick;
