import { Col, Container, Row } from "react-bootstrap"

const Contact = (props) =>{

    return(
        
        <div className='contact'>
          
            <Container className='container'>
                    <Row className='row'>
                        <Col className='col'>
                            <div className='wrapper'>
                                <p className='email'>
                                    NourBasha2011<span>@gmail.com</span>
                                </p>
                                <p className='phone'>
                                    +201020696796
                                </p>
                                <p className='linkedin'>
                                    <a href='www.linkedin.com/in/nour-wagdy-932918184'>
                                      Linkedin
                                    </a>
                                </p>
                            </div>
                        </Col>
                    </Row>
            </Container>


        </div>
    )
}

export default Contact;