import {useEffect} from 'react';
import {setI18nConfig} from './localize';
import * as RNLocalize from 'react-native-localize';
import {translate} from './localize';
const Language = () => {
  setI18nConfig();

  const handleLocalizationChange = () => {
    setI18nConfig();
  };
  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);
  return null;
};
export {translate};
export default Language;
