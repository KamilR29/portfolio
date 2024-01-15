import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import {AboutMe} from "./pages/AboutMe";
import {Skills} from "./pages/Skills";
import {Projects} from "./pages/Projects";
function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
              <Route path="/about_me" element={<AboutMe/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
