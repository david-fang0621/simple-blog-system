import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// imports page & layout
import Header from "./components/Header"
import Article from "./pages/Article"
import Category from "./pages/Category"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Article />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
