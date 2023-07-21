import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Appcontext from "./context/context";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Appcontext>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/menu" exact element={<Menu />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>
            <Footer />
          </Appcontext>
        </Router>
      </div>
    </>
  );
}

export default App;
