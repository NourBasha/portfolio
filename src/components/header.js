
import {NavLink} from 'react-router-dom';

import { Nav, Navbar } from "react-bootstrap";

const Header = () => {

    return(
        <Navbar className='header'>
         
              <Nav className='nav'>
                   <Nav.Item>
                        <NavLink className='nav-link' to="/" exact>
                            Home
                        </NavLink>
                    </Nav.Item>

                     <Nav.Item>
                        <NavLink to="/skills" exact>
                            Skills
                        </NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink className='nav-link' to="/work" exact>
                            Latest Work
                        </NavLink>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <NavLink className='nav-link' to="/contact" exact>
                            Contact me
                        </NavLink>
                    </Nav.Item>
                
                  

              </Nav>
         
        </Navbar>
    );
}

export default Header;