import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Universities from "./pages/universities";
import UniversityDetaledPage from "./pages/universityDetailedPage";


function App() {

  return (
    <div className="App">
      <h1>
        <strong>Header</strong>
      </h1>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/universities" Component={Universities} />
        <Route path="/universities/:domain" Component={UniversityDetaledPage} />
      </Routes>
    </div>
  );
}

export default App;
