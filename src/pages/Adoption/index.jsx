import { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import AdoptionWrapper from '../../components/AdoptionWrapper';
import Spinner from '../../components/Spinner';

import api from '../../services/api';

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
  AdoptionFooter,
  LinkAdoption as Link,
} from './styles';

export default () => {
  const [loading, setLoading] = useState(false);
  const [adoptions, setAdoptions] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [count, setCount] = useState(1);
  const options = [
    { value: 'test', label: 'Vale do Paranhana' },
    { value: 'test2', label: 'Vale do Sinos' },
  ];
  // const options = [];

  async function getRegionsData() {
    try {
      const { data } = await api.get('/regions');
      // data.forEach((region) => {
      //   options.push({
      //     value: region.uid,
      //     label: region.name,
      //   });
      // });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  const handleChange = async (event, value) => {
    setLoading(true);
    try {
      setPage(value);
      setAdoptions([]);
      const response = await api.get(`/adoptions?page=${value}&limit=${limit}`);
      setAdoptions(response?.data.data);
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };

  async function getAdoptionsData() {
    setLoading(true);

    try {
      const response = await api.get(`/adoptions?page=${page}&limit=${limit}`);
      setAdoptions(response?.data?.data);
      setCount(response?.data?.total_pages);
      setPage(response?.data?.current_page);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAdoptionsData();
    getRegionsData();
  }, []);

  return(
    <AdoptionContainer>
      <Spinner visible={loading} />
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
        {adoptions.map((adoption) => (
          <Link to={`/adoptions/${adoption.uid}`}>
            <AdoptionWrapper
              key={adoption.uid}
              image={adoption.title}
              title={adoption.title}
              text={adoption.description}
              city={adoption.address}
            />
          </Link>
        ))}
      </AdoptionMain>
      <AdoptionFooter>
        <Pagination
          count={count}
          page={Number(page)}
          onChange={handleChange}
          shape="rounded"
        />
      </AdoptionFooter>
    </AdoptionContainer>
  );
};
