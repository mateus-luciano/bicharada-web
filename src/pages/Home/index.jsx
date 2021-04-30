/* eslint-disable max-len */
import {
  HomeContainer,
  HomeHeader,
  HomeHeaderTitle,
  HomeHeaderSubtitle,
  HomeHeaderText,
  HomeMain,
} from './styles';

export default () => {
  return(
    <HomeContainer>
      <HomeHeader>
        <HomeHeaderTitle>
          Bora adotar um novo amigo?
        </HomeHeaderTitle>
        <HomeHeaderSubtitle>
          Lorem Ipsum
        </HomeHeaderSubtitle>
        <HomeHeaderText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum commodo odio venenatis porta non eget dui. Ut nisl enim, rutrum at bibendum efficitur, tempus eget ligula.
        </HomeHeaderText>
        <HomeHeaderText>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed et augue venenatis eros accumsan scelerisque. Fusce lacinia in est in dictum. Proin pharetra sit amet sem vitae tempus. Praesent commodo nulla sed efficitur dignissim.
        </HomeHeaderText>
      </HomeHeader>
      <HomeMain>
        test
      </HomeMain>
    </HomeContainer>
  );
};
