import * as Yup from 'yup';
import { VALIDATION_MUST_BE_POSITIVE } from 'i18n';

export default Yup.object().shape({
  value: Yup.number().min(0, VALIDATION_MUST_BE_POSITIVE.message),
});
