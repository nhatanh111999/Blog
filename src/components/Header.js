import '../css/Header.css';
import {Nav , Navbar ,Container } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
 function Header() {

  return (
    <>
        <Navbar bg="light" variant="dark">
          <Container>
            <div>logo</div>
            <Nav className="me-auto">
              <NavLink activeClassName="active" to="/" exact={true} >Trang chủ</NavLink>
              <NavLink activeClassName="active" to="/blogs">Blog </NavLink>
              <NavLink activeClassName="active" to="/truyen">Truyện</NavLink>
            </Nav>
          </Container>
      </Navbar>
  
    </>
  
  );
}

export default Header;