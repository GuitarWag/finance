import * as Yup from 'yup';
import {
  VALIDATION_MIN_CHAR,
  VALIDATION_MAX_CHAR,
  VALIDATION_REQUIRED,
  VALIDATION_MUST_BE_POSITIVE,
} from 'i18n';

export default Yup.object().shape({
  title: Yup.string()
    .min(3, VALIDATION_MIN_CHAR.message)
    .max(30, VALIDATION_MAX_CHAR.message)
    .required(VALIDATION_REQUIRED.message),
  description: Yup.string()
    .min(3, VALIDATION_MIN_CHAR.message)
    .max(50, VALIDATION_MAX_CHAR.message),
  value: Yup.number()
    .positive(VALIDATION_MUST_BE_POSITIVE.message)
    .nullable()
    .required(VALIDATION_REQUIRED.message),
});
