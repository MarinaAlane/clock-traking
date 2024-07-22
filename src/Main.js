import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import InitialPage from "./Pages/InitialPage/InitialPage.tsx"
import MainPage from "./Pages/MainPage/mainPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
