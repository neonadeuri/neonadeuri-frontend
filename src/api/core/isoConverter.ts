import { DateTime } from 'luxon';

const keywords = ['Time', 'From', 'To'];

export const adaptIsoStrings = (input: any) => {
  const adaptRecursive = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && typeof obj[key] === 'object') {
        adaptRecursive(obj[key]);
      } else if (
        keywords.some((keyword) => key.includes(keyword)) ||
        /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d*/.test(obj[key])
      ) {
        obj[key] = DateTime.fromISO(obj[key]);
      }
    });
  };
  adaptRecursive(input);
};
