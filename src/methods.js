export const validationMethods = {
  isString(operator) {
    return typeof operator === 'string';
  },
  isAccepted(operator) {
    return (
      operator === 'yes' ||
      operator === 'on' ||
      operator === 1 ||
      operator === true
    );
  },
  enum(operator, values) {
    let result = false;
    values.forEach((o) => {
      if (operator === o) result = true;
    });
    return result;
  },
  isNumber(operator) {
    return typeof operator === 'number';
  },
  isDate(operator) {
    return !isNaN(Date.parse(new Date(operator)));
  },
  isEmail(operator) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(operator);
  },
  isValidRif(operator) {
    return /^([V|E|G|J|P|N]{1}\d{8,10})*$/.test(operator);
  },
  isValidPhone(operator) {
    return /^(412|416|414|424|426)\d{7}$/.test(operator);
  },
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
  isArray(operator, type) {
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
};
