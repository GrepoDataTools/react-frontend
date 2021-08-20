import { format, isDate } from 'date-fns';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const objectToUrlParams = (object: Object) => {
  const paramsAsString = Object.entries(object).map(([key, value]) => {
    if (!value) return null;

    if (isDate(value)) return `${key}=${format(new Date(value), 'yyyy-MM-dd')}`;

    return `${key}=${value.toString()}`;
  });

  return paramsAsString.filter((value) => value !== null).join('&');
};
