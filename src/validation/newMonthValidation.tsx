import * as Yup from 'yup';
import I18N from 'i18n';

export default Yup.object().shape({
  title: Yup.string()
    .min(3, I18N.VALIDATION_MIN_CHAR.key)
    .max(30, I18N.VALIDATION_MAX_CHAR.key)
    .required(I18N.VALIDATION_REQUIRED.key)
    .matches(/[a-zA-Z0-9 _-]$/, {
      message: I18N.VALIDATION_INVALID_FORMAT.key,
      excludeEmptyString: true,
    }),
});
