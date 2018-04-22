import React from 'react';
import {Route} from 'react-router-dom';

//Components
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        )
    }
}

export default Main;