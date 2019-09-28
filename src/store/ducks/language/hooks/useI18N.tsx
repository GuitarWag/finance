import { useSelector } from 'react-redux';
import { Selectors as LanguageSelectors } from '../../language';

const useI18N = () => useSelector(LanguageSelectors.messages);

export default useI18N;
