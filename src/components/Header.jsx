import { StyledHeader } from "./styles/Header.styled";
import { Nav } from "./styles/Header.styled"
import { Logo } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";



function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="src\public\assets\logo.svg" alt="Logo"/>
          <Button>Try it for free!</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
