import * as Yup from 'yup';
import I18N from 'i18n';

export default Yup.object().shape({
  value: Yup.number().min(0, I18N.VALIDATION_MUST_BE_POSITIVE.key),
});
