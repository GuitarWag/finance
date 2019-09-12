import transformFirebaseObjToArray from 'utils/transformFirebaseObjToArray';
import { Month } from 'services/types';
import { orderBy } from 'lodash';

export default (data: Month, identifier: string) => {
  const inputs = orderBy(
    transformFirebaseObjToArray(data.inputs),
    ['dateOfInclusion'],
    'desc',
  );
  const outputs = orderBy(
    transformFirebaseObjToArray(data.outputs),
    ['dateOfInclusion'],
    ['desc'],
  );
  return {
    ...data,
    inputs,
    outputs,
    identifier,
  };
};
