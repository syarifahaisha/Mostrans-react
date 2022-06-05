import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

import Navbar from "./component/navbar"
import CharacterListPage from "./pages/js/CharacterList";
import DetailCharacterPage from "./pages/js/DetailCharacter";
import CharacterLocationPage from "./pages/js/CharacterLocation";
import DetailLocPage from "./pages/js/DetailLoc";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<CharacterListPage/>} />
        <Route exact path="/detail/:id" element={<DetailCharacterPage/>} />
        <Route exact path="/loc" element={<CharacterLocationPage/>} />
        <Route exact path="/loc/detail/:id" element={<DetailLocPage/>} />
      </Routes>
    </Router>
  </div>

  );
}

export default App;
