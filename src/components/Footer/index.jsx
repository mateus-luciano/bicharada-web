import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  Footer,
  FooterContainer,
  FooterTextHeading,
  FooterSubtitle,
  SocialIcons,
  SocialIconLink,
} from './styles';

export default () => {
  return(
    <Footer>
      <FooterContainer>
        <FooterTextHeading>
          Bicharada 2021
        </FooterTextHeading>
        <FooterSubtitle>
          Desenvolvido por Mateus
        </FooterSubtitle>
        <SocialIcons>
          <SocialIconLink
            href="#"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink
            href="#"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href="#"
            target="_blank"
            aria-label="Linkedin"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink
            href="#"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </SocialIconLink>
        </SocialIcons>
      </FooterContainer>
    </Footer>
  );
};
