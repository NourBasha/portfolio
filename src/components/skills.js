import Typed from "react-typed";
import { Container,Row,Col } from "react-bootstrap";

const Skills = (props)=>{

    return(
        <div className='skills'>
         <Container className='container'>
            <Row className='skills-row'>
                <Col sm={12} md={4} className='skills-col'>
                    <Typed
                        strings={['Front-End Development Using Reactjs']}
                        typeSpeed={50}
                        backSpeed={20}
                        loopCount={1}
                        className='skills-types'
                        startDelay={0}
                        showCursor={false}
                        >
                    </Typed>
                    <Typed
                        strings={['Connecting The Front-End With Back-End Server']}
                        typeSpeed={50}
                        backSpeed={20}
                        loopCount={1}
                        className='skills-types'
                        startDelay={2800}
                        showCursor={false}
                        >
                    </Typed>
                    <Typed
                        strings={['Back-End Development Using Nodejs']}
                        typeSpeed={50}
                        backSpeed={20}
                        loopCount={1}
                        className='skills-types'
                        startDelay={6250}
                        showCursor={false}
                        >
                    </Typed>
                    <Typed
                        strings={['For Detailed Skills Please Refere To My Resume']}
                        typeSpeed={50}
                        backSpeed={20}
                        loopCount={1}
                        className='skills-types'
                        startDelay={8800}
                        showCursor={false}
                        >
                    </Typed>
                </Col>
            </Row>
            <Row className='pdf-row'>
                <Col className='pdf-col'>
                <a  href='https://drive.google.com/file/d/1vnUyya7ARMSdFkrmXSE987Y-MntZcI0X/view?usp=sharing'>
                    Resume
                </a>
                </Col>
            </Row>
        </Container>
    </div>
    );
    
}

export default Skills;