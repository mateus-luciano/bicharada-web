/* eslint-disable max-len */
import { Button } from '../../styles/global';
import {
  HomeContainer,
  TextWrapper,
  Heading,
  Subtitle,
  Text,
  ImageWrapper,
  Image,
  LinkInt as Link,
} from './styles';

import image from '../../assets/images/undraw_pet_adoption_2qkw (1).svg';

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
        <Link to="/adoptions">
          <Button>
            Adotar
          </Button>
        </Link>
      </TextWrapper>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
    </HomeContainer>
  );
};
