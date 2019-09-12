import keys from 'lodash/keys';

interface Obj {
  [key: string]: any;
}

export default (object: Obj, identifier: string = 'identifier') => {
  return keys(object).map(i => ({
    ...object[i],
    [identifier]: i,
  }));
};
