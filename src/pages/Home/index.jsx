/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { Button } from '../../styles/global';
import {
  HomeContainer,
  TextWrapper,
  Heading,
  Subtitle,
  Text,
  ImageWrapper,
  Image,
} from './styles';

import image from '../../assets/images/undraw_Access_account_re_8spm.svg';

export default () => {
  return(
    <HomeContainer>
      <TextWrapper>
        <Heading>
          Procurando um novo amigo?
        </Heading>
        <Subtitle>
          Faça login para dar um novo lar a um pet
        </Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum commodo odio venenatis porta non eget dui. Ut nisl enim, rutrum at bibendum efficitur, tempus eget ligula.
        </Text>
        <Button>
          <Link to="/adoptions">
            Adotar
          </Link>
        </Button>
      </TextWrapper>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
    </HomeContainer>
  );
};
