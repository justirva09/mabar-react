import {React, Component, BrowserRouter, Switch, Route} from 'libraries';

import { route } from 'routes';

// https://rawcdn.githack.com/justirva09/recipe-apps/eb47281f3edb19393d6cc219dfc2c182c517fee4/src/assets/dummy/resep.json

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            {route.map((item, index) => {
              return <Route key={index} exact={item.exact} path={item.path} component={item.component} />
            })}
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;
