import {
  Wrapper,
  Image,
  Title,
  Text,
  TextCity,
} from './styles';

export default ({
  image,
  title,
  text,
  city,
}) => {
  return(
    <Wrapper>
      <Image>{image}</Image>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <TextCity>{city}</TextCity>
    </Wrapper>
  );
};
