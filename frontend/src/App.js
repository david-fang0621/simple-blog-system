import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// imports page & layout
import Header from "./components/Header"
import Article from "./pages/Article"
import Category from "./pages/Category"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details/:id" element={<Article />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
