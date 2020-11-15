import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className='app'>
      <Router>
        <Header />
        <Switch>
        <Route path='/search'>
            <SearchPage/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
           </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
