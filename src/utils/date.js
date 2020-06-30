const formatMonth = (number) => {
  switch (number) {
    case 1: return 'января';
    case 2: return 'февраля';
    case 3: return 'марта';
    case 4: return 'апреля';
    case 5: return 'мая';
    case 6: return 'июня';
    case 7: return 'июля';
    case 8: return 'августа';
    case 9: return 'сентября';
    case 10: return 'октября';
    case 11: return 'ноября';
    case 12: return 'декабря';
    default: return '/';
  }
};

/**
 * Given month string '01' to '12'
 * returns locale string for month
 */
export const formatStrMonth = numberString => formatMonth(parseInt(numberString, 10));

const pad = (num) => {
  const norm = Math.floor(Math.abs(num));
  return (norm < 10 ? '0' : '') + norm;
};

/**
 * Given ISO date formatted string: 2011-10-10T14:48:00
 * returns date `10 октября`
 */
export const convertISODateToDMString = (ISODate) => {
  const d = new Date(ISODate);
  return `${d.getDate()} ${formatStrMonth(d.getMonth() + 1)}`;
};

/**
 * Given ISO date formatted string: 2011-10-10T14:48:00
 * returns full date`10 октября 2011 г`
 */
export const convertISODateToString = (ISODate) => {
  const d = new Date(ISODate);
  return `${convertISODateToDMString(ISODate)} ${d.getFullYear()} г`;
};


/**
 * Given ISO date formatted string: 2011-10-10T14:48:00
 * returns time `14:48`
 */
export const convertISOTimeToString = (ISODate) => {
  const d = new Date(ISODate);
  return `${d.getHours()}:${pad(d.getMinutes())}`;
};

/**
 * Given ISO date formatted string: 2011-10-10T14:48:00
 * returns time `14:48, 10 октября 2019 г`
 */
export const convertISODateTimeToString = (ISODate) => (
  `${convertISOTimeToString(ISODate)}, ${convertISODateToString(ISODate)}`
);
