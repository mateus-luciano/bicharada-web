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
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <TextCity>{city}</TextCity>
    </Wrapper>
  );
};
