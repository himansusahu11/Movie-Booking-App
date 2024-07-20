import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { getUserName, isUserLoggedIn } from "../../utils/isLoggedInOrNot";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LangContext, ThemeContext } from "../../App";

function NavbarComponent(props) {
  const isLoggedIn = isUserLoggedIn();
  const navigate = useNavigate();

  //we can consume the context api of langContext here also bcz appComp is a child of movieDetails component
  const value = useContext(LangContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function onButtonClick() {
    if (isLoggedIn) {
      localStorage.clear();
    }
    navigate("/login");
  }
  function onToggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <>
      <Navbar className="mb-3" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link href="/">Movie Bookings Appliction</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="light" onClick={onButtonClick}>
            {isLoggedIn ? "Logout" : "LogIn"}
          </Button>
          {isLoggedIn && (
            <p className="py-2 m-1 text-light d-flex text-center justify-content-center align-items-center">
              Hi {getUserName()}
            </p>
          )}
        </Container>
        <Button onClick={onToggleTheme} className="m-2" variant="light">
          Toggle Theme
        </Button>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
