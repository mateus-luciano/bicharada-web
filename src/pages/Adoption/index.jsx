import AdoptionWrapper from '../../components/AdoptionWrapper';

import test from '../../assets/images/undraw_Access_account_re_8spm.svg';

import {
  AdoptionContainer,
  AdoptionHeader,
  TopHeader,
  FormHeader,
  HeaderSelect,
  HeaderLink,
  HeaderButton,
  CheckBoxContainer,
  LabelCheckBoxHeader,
  CheckBoxHeader,
  AdoptionMain,
} from './styles';

export default () => {
  const options = [
    { value: 'test', label: 'Vale do Paranhana' },
    { value: 'tes2', label: 'Vale do Sinos' },
  ];

  return(
    <AdoptionContainer>
      <AdoptionHeader>
        <TopHeader>
          <HeaderSelect
            defaultValue={options[0]}
            options={options}
          />
          <HeaderLink to="/adoptions/add">
            <HeaderButton>
              ADD
            </HeaderButton>
          </HeaderLink>
        </TopHeader>
        <FormHeader>
          <CheckBoxContainer>
            <LabelCheckBoxHeader for="all">Todos</LabelCheckBoxHeader>
            <CheckBoxHeader type="checkbox" id="all" />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <LabelCheckBoxHeader for="dog">Cachorros</LabelCheckBoxHeader>
            <CheckBoxHeader type="checkbox" id="dog" />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <LabelCheckBoxHeader for="cat">Gatos</LabelCheckBoxHeader>
            <CheckBoxHeader type="checkbox" id="cat" />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <LabelCheckBoxHeader for="other">Outros</LabelCheckBoxHeader>
            <CheckBoxHeader type="checkbox" id="other" />
          </CheckBoxContainer>
        </FormHeader>
      </AdoptionHeader>
      <AdoptionMain>
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
      </AdoptionMain>
    </AdoptionContainer>
  );
};
