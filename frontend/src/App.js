import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

// imports page & layout
import Header from "./components/Header"
import Article from "./pages/Article"
import Category from "./pages/Category"
import Home from "./pages/Home"

// apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/details/:id" element={<Article />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
