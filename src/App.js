import './App.css';
//import F1 from './components/F1';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About } from "./components/F2";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <div>
      {/*<F1 />*/}
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter> 
      {/* 
      <div>
            <h1 style={{color:"red"}}>Inline style</h1>
            <h1 style={myStyle}>Internal style</h1>
            <h1 class="c1">External style</h1>
            <h1 class="text-center text-danger bg-warning">Bootstrap style</h1>
        </div>
      */
      }
      {/*<EmployeeDetails />*/}
      {/* 
      To install: npm install react-router-dom

      http://localhost:3000/   -> Home 
      http://localhost:3000/about -> About
      */}
    </div>
  );
}

export default App;

