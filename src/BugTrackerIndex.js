import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Layout} from "./layout/Layout";
import Login from "../src/componant/Login";
// import temp from "./componant/temp/temp";
// import AddCase from "./componant/AddCase";
import "bootstrap/dist/css/bootstrap.min.css";
//
class BugTrackerIndex extends React.Component {

    render() {
        const greeting = 'Welcome to React';

        return (
            <div className="d-flex flex-column h-100" style={{backgroundColor:"white",height: "100%"}}>
                <div className="flex-grow-1 flex-shrink-0" style={{backgroundColor:"#ffffff", height: "100%"}}>
                    <Router className="d-flex flex-column"  style={{height: "100%"}}>
                        <Layout style={{height: "100% !important"}}>
                            <Switch>
                                <Route exact path="/" component={Login}/>
                                {/*<Route exact path="/" component={AddCase}/>*/}
                                {/*<Route exact path="/AddCase" component={AddCase}/>*/}
                                {/*<Route exact path="/temp" component={temp}/>*/}
                            </Switch>
                        </Layout>
                    </Router>
                </div>
            </div>
        );
    }
}
const a = props => <h1>{props.greeting}</h1>;

export default BugTrackerIndex;
