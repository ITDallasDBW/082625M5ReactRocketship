import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Nav from "./components/Nav.jsx"
import Users from "./pages/Users.jsx";

function App() {

return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users/:username" element={<Users />} />
          /* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */
        </Routes>
      </Router>
  );
}

export default App;


        // <nav>
        //   <Link to="/">Home</Link>
        //   <Link to="/about">About</Link>
        //   <Link to="/contact">Contact</Link>
        //   {/* <a href="/">Home</a>
        //   <a href="/about">About</a>
        //   <a href="/contact">Contact</a> */}
        // </nav>
