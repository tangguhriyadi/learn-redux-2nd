import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Child} from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
       
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/child" element={<Child />} exact/>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
