import { Container, Nav, Navbar } from "react-bootstrap";

const Header=()=>{
    return(
        <header className="mb-3"> 
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">TODO APP</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
      </header>


    );
}
export default Header;