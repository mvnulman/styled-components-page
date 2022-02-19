import { StyledHeader, Nav, Logo, Image} from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="src\public\assets\logo.svg" alt="Logo" />
          <Button>Try it free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engfage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started for Free
            </Button>
          </div>

          <Image src="src\public\assets\illustration-mockups.svg" alt="mockups" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
