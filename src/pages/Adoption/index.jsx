import AdoptionWrapper from '../../components/AdoptionWrapper';

import test from '../../assets/images/undraw_Access_account_re_8spm.svg';

import { AdoptionContainer, AdoptionHeader, HeaderSelect } from './styles';

export default () => {
  return(
    <AdoptionContainer>
      <AdoptionHeader>
        <HeaderSelect  />
      </AdoptionHeader>
      {/* <AdoptionWrapper
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
      /> */}
    </AdoptionContainer>
  );
};
