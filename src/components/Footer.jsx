import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="src\public\logo_white.svg" alt="white logo" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          {/* Social Icons */}
        </Flex>

        <p>&copy; 2022 Huddle. All Rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

