import {React, Component, BrowserRouter, Switch, Route} from 'libraries';

import { route } from 'routes';

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
