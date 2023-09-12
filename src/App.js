import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScreenHome from "../src/screen/ScreenHome";
import ScreenLogin from "../src/screen/ScreenLogin";
import ScreenRegister from "../src/screen/ScreenRegister";
import ScreenError from "../src/screen/ScreenError";
import ScreenProducts from "../src/screen/ScreenProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenHome/>}/>
          <Route path="/login" element={<ScreenLogin/>}/>
          <Route path="/register" element={<ScreenRegister/>}/>
          <Route path="/error" element={<ScreenError/>}/>
          <Route path="/products" element={<ScreenProducts/>}/>          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
