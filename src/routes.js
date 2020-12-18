import {Switch, Route} from "react-router-dom";

import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

export default (
    <Switch>
        <Route exact path="/" component={AboutMe}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)