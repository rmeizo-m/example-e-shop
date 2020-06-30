export const blankArr = [];
export const blankObj = {};


/**
 * A list.map for objects
 */
export const map = (obj, fn) =>
  Object.keys(obj)
    .reduce((result, key) => {
      result[key] = fn(obj[key], key);
      return result;
    }, {});


/**
 * A list.forEach for objects
 */
export function forEach(obj, fn) {
  return Object.keys(obj).forEach((key) => {
    fn(obj[key], key);
  });
}

/**
 * A list.filter for objects
 */
export const filter = (obj, fn) =>
  Object.keys(obj)
    .reduce((result, key) => {
      if (fn(obj[key], key)) result[key] = obj[key];
      return result;
    }, {});

/**
 * A list.reduce for objects
 */
export const reduce = (obj, fn, initialState) =>
  Object.keys(obj)
    .reduce(
      (result, key) => fn(result, obj[key], key),
      initialState,
    );


export const filterDefined = obj => filter(obj, val => typeof val !== 'undefined');
export const filterValuable = obj => filter(obj, val => !isNullOrUndefined(val));

export const flatten = arrayOfArrays => [].concat(...arrayOfArrays);
export const distinct = arrayWithDuplicates => Array.from(new Set(arrayWithDuplicates));
export const isPlainObject = obj => Object.prototype.toString.call(obj) === '[object Object]';

/**
 * Group a large array into an array of arrays by result of `fn` call on item
 * To avoid grouping elements, `NaN` can be returned (since NaN !== NaN)
 * @returns {[[item]]}
 */
export const sliceBy = (list, fn) => {
  if (!list.length) return [];
  const [first, ...rest] = list;
  const isSameGroup = item => fn(item) === fn(first);
  return [[first, ...rest.filter(isSameGroup)], ...sliceBy(rest.filter(item => !isSameGroup(item)), fn)];
};

/**
 * A useful function to print result of another method call,
 * without interrupting the execution
 * do not delete even if unused
 */
export const logFunctionResult = (...args) => (...funcArgs) => {
  const [title, fn] = args.length === 1 ? ['Без названия', args[0]] : args;
  try {
    const value = fn(...funcArgs);
    console.log(title, { result: value, args: funcArgs });
    return value;
  } catch (err) {
    console.log(title, { error: err, args: funcArgs });
    throw err;
  }
};


export const convertListToObjectBy = field =>
  list => list.reduce((result, item) => {
    result[item[field]] = item;
    return result;
  }, {});

export const isPromise = inst => typeof inst === 'object' && typeof inst.then === 'function';

export const passAsIs = obj => obj;

export const passUndefined = () => undefined;

export const isNullOrUndefined = value => value === null || typeof value === 'undefined';
export const valueOr = (value, defaultValue, { undefined: replaceUndefined = true, null: replaceNull = true } = {}) =>
  (replaceUndefined && typeof value === 'undefined' || replaceNull && value === null ? defaultValue : value);

export const explodeStringByRegExp = (string, matchRegExp) => {
  const matchResult = string.match(matchRegExp);
  if (matchResult) {
    const matchedVal = matchResult[0];
    const matchIndexStart = matchResult.index;
    const matchIndexEnd = matchResult.index + matchedVal.length;
    return [string.slice(0, matchIndexStart), matchedVal, string.slice(matchIndexEnd)];
  }
  return [string, null, ''];
};

/**
 * Outputs the proper word declensions by given count
 * @param count - count to determine appropriate case
 * @param titles - list of words in three cases: [nominative, genitive, multiplicative]
 */

export const wordFormByCount = (count, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]];
};

/**
 *
 * @param count - count to determine appropriate case
 * @param titles - list of words in two cases: [genitive, multiplicative]
 * @returns {*}
 */
export const wordGenitiveFormByCount = (count, titles) => wordFormByCount(count, [titles[0], titles[1], titles[1]]);

const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;

/** common methods defined by other libraries that can be possibly reused */

export const escapeStringRegexp = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }
  return string.replace(matchOperatorsRegex, '\\$&');
};
export { compose } from 'redux';

export { shallowEqualObjects as shallowEqual } from 'shallow-equal';

export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

export const getRandomInt = (min, max) => Math.round(getRandomArbitrary(min, max));
