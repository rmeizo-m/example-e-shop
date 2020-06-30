export const nbsp = '\u00A0';

/**
 * splits price value into three-digit groups
 * */

export const formatPrice = (number, precision) => (
  typeof number === 'number' ? (
    number.toFixed(precision)
      .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1 ')
      .replace('.', ',')
  ) : ''
);

const phonePattern = '+7 ___ ___ __ __';
export function formatPhone(phone) {
  let ind = 0;
  // eslint-disable-next-line no-plusplus
  return phonePattern.replace(/_/g, () => phone[ind++]);
}

