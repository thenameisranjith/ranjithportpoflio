import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './component/About';
import HomePage from './component/HomePage';
import Gallery from './component/Gallery';
import Nav from './component/Nav';
import Details from "./component/Details";
import Login from "./component/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route
            exact
            path="/about/:id"
            render={(props) => {
              return <Details {...props} path="/about/:id" />;
            }}
        />
        <Route path="/login" component={Login}/>
        </Switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
