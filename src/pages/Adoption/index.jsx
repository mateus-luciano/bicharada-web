import AdoptionWrapper from '../../components/AdoptionWrapper';

import test from '../../assets/images/undraw_Access_account_re_8spm.svg';

import { AdoptionContainer } from './styles';

export default () => {
  return(
    <AdoptionContainer>
      <AdoptionWrapper
        image={test}
        title="Test"
        text="test"
        city="Parobé"
      />
      <AdoptionWrapper
        image={test}
        title="Test"
        text="test"
        city="Parobé"
      />
    </AdoptionContainer>
  );
};
