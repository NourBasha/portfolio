import { Col, Container, Row } from "react-bootstrap"



const LatestWork = (props) => { 

    return(
        <div className='latest-work'>

          <Container className='work-container'>
              <Row className='work-row'>
                  <Col  md={6} className='work-col'>
                    <div className='wrapper'>
                        <h3>
                            MaMovies App
                        </h3>
                        <p>
                            Discover the latest Movies, Save Your Picks And More!
                        </p>
                        <p>
                          Try It Yourself - <a href='https://ma-movies.herokuapp.com'> MaMovies </a>
                        </p>
                    </div>
                  </Col>
                  <Col  md={6} className='work-col'>
                    <div className='wrapper'>
                        <h3>
                            Emaily App
                        </h3>
                        <p>
                          Stay Connected To Your Clients And Send Feedbacks
                        </p>
                        <p>
                          Try It Yourself - <a href='https://protected-fortress-85047.herokuapp.com'> Emaily </a>
                        </p>
                    </div>
                  </Col>
              </Row>
          </Container>
           
        </div>
    );

}

export default LatestWork ;