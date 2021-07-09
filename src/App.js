import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <h1 className="text-center m-4">USER MANAGEMENT</h1>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/add" exact>
            <AddUser />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
