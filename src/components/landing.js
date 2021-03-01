import Typed from 'react-typed';
import Image  from "react-bootstrap/Image";

const Landing = (props)=> {
    return(
        <div className='landing'>

          <div className='typed'>
                <Typed
                        strings={[
                           'I\'m Nour Wagdy',
                           'AKA Nour Basha',
                           'Web developer',
                           'Ckeck Out My Latest Work'
                        ]}
                        typeSpeed={60}
                        backSpeed={20}
                        loop 
                        className='typed-ele'
                    > 
                </Typed>
          </div>
          <div className='image'>
                <Image src='' alt='image' rounded></Image>
          </div>
        </div>
    );
} 

export default Landing;