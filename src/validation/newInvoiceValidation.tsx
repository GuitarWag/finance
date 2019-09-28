import * as Yup from 'yup';
import I18N from 'i18n';

export default Yup.object().shape({
  title: Yup.string()
    .min(3, I18N.VALIDATION_MIN_CHAR.key)
    .max(30, I18N.VALIDATION_MAX_CHAR.key)
    .required(I18N.VALIDATION_REQUIRED.key),
  description: Yup.string()
    .min(3, I18N.VALIDATION_MIN_CHAR.key)
    .max(50, I18N.VALIDATION_MAX_CHAR.key),
  value: Yup.number()
    .positive(I18N.VALIDATION_MUST_BE_POSITIVE.key)
    .nullable()
    .required(I18N.VALIDATION_REQUIRED.key),
});
