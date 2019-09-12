import * as Yup from 'yup';
import {
  VALIDATION_MIN_CHAR,
  VALIDATION_MAX_CHAR,
  VALIDATION_REQUIRED,
  VALIDATION_INVALID_FORMAT,
} from 'i18n';

export default Yup.object().shape({
  title: Yup.string()
    .min(3, VALIDATION_MIN_CHAR.message)
    .max(30, VALIDATION_MAX_CHAR.message)
    .required(VALIDATION_REQUIRED.message)
    .matches(/[a-zA-Z0-9 _-]$/, {
      message: VALIDATION_INVALID_FORMAT.message,
      excludeEmptyString: true,
    }),
});
