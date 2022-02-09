import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { routes } from "./utils/constants/Routes";

function App() {
  const history = useHistory();

  return (
    <BrowserRouter history={history}>
      <Switch>
        {routes.map(({ path, component: Component, exact }) => (
          <Route key={path} exact={exact} path={path} component={Component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
