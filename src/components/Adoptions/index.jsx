import { Title, Text } from './styles';

export default ({ title, text }) => {
  return(
    <div>
      <Title>
        {title}
      </Title>
      <Text>
        {text}
      </Text>
    </div>
  );
};
