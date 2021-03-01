
import {Router, Route, Switch} from 'react-router';
import Landing from '../components/landing';
import Header from '../components/header';

import history from '../utils/history';
import Skills from '../components/skills';
import LatestWork from '../components/LatestWork';
import Contact from '../components/Contact';


const Routes = (props) =>{

return(

  <div>
    <Router history={history}>
         <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact  path='/skills' component={Skills} />
                <Route exact  path='/work' component={LatestWork} />
                <Route exact  path='/contact' component={Contact} />
            </Switch>
         </div>
    </Router>
  </div>

);

}

export default Routes;