import transformFirebaseObjToArray from 'utils/transformFirebaseObjToArray';
import { Month } from 'services/types';
import { orderBy } from 'lodash';

interface Data {}

export default (data: Data) => {
  const months = transformFirebaseObjToArray(data, 'identifier');
  return months.map((month: Month) => {
    const inputs = orderBy(
      transformFirebaseObjToArray(month.inputs),
      ['dateOfInclusion'],
      ['desc'],
    );
    const outputs = orderBy(
      transformFirebaseObjToArray(month.outputs),
      ['dateOfInclusion'],
      ['desc'],
    );
    return {
      ...month,
      inputs,
      outputs,
    };
  });
};
