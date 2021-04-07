export const validationMethods = {
  /**
   * @param {any} operator
   * @returns {Boolean} return true if operator is type String
   */
  isString(operator) {
    return typeof operator === 'string';
  },

  /**
   * @param {any} operator
   * @returns {Boolean} return true if operator is one of 'yes' | 'on' | 1 | true
   */
  isAccepted(operator) {
    return (
      operator === 'yes' ||
      operator === 'on' ||
      operator === 1 ||
      operator === true
    );
  },
  /**
   * @param {any} operator
   * @param { Array <String> } values
   * @returns {Boolean} return true if operator is one of the values
   */
  oneOf(operator, values) {
    let result = false;
    values.forEach((o) => {
      if (operator === o) result = true;
    });
    return result;
  },
  /**
   *
   * @param {any} operator
   * @returns {Boolean} true if operator is a number
   */
  isNumber(operator) {
    return typeof operator === 'number';
  },
  /**
   * @param {any} operator
   * @returns {Boolean} true if operator is a valid Date format
   */
  isDate(operator) {
    return !isNaN(Date.parse(new Date(operator)));
  },
  /**
   * @param {*} operator
   * @returns { Boolean } true if the operator has email format
   */
  isEmail(operator) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(operator);
  },
  /**
   * @param {*} operator
   * @returns { Boolean } true if operator has Venezuelan Rif format
   */
  isVzlaRif(operator) {
    return /^([V|E|G|J|P|N]{1}\d{8,10})*$/.test(operator);
  },
  /**
   * @param {*} operator
   * @returns { Boolean } true if operator has Venezuela phone format
   */
  isVzlaPhone(operator) {
    return /^(412|416|414|424|426)\d{7}$/.test(operator);
  },
  /**
   * @param {*} operator
   * @returns { Number } score between 0 and 5
   */
  passwordEval(operator) {
    let score = 0;
    if (typeof operator !== 'string') return 0;
    if (/[a-z]+/.test(operator)) score += 1;
    if (/[A-Z]+/.test(operator)) score += 1;
    if (/[0-9]+/.test(operator)) score += 1;
    if (/[$@#&!]+/.test(operator)) score += 1;
    if (operator.length > 6) score += 1;
    return score;
  },
  /**
   * @param {*} operator
   * @param {*} type
   * @returns { Boolean } true if operator is and array of "type"
   */
  isArrayOf(operator, type) {
    if (Array.isArray(operator)) {
      if (type) {
        for (let i = 0; i < operator.length; i++) {
          const e = operator[i];
          if (typeof e !== type.toLowerCase()) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  },
  /**
   * @param {*} operator
   * @returns { Boolean } true if operator is an array
   */
  isArray(operator) {
    return Array.isArray(operator);
  },
};
