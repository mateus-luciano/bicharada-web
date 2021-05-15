import {
  Button,
} from '@material-ui/core';

import {
  Wrapper,
  Image,
  Title,
  Text,
  TextCity,
  LinkAdoption as Link,
  FooterWrapper,
} from './styles';

export default ({
  image,
  title,
  text,
  city,
  uid,
}) => {
  return(
    <Wrapper key={uid}>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <FooterWrapper>
        <TextCity>{city}</TextCity>
        <Link to={`/adoptions/${uid}`}>
          <Button
            color="primary"
            variant="contained"
          >
            Ver mais
          </Button>
        </Link>
      </FooterWrapper>
    </Wrapper>
  );
};
