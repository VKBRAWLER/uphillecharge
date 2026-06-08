import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Place from "./pages/Places";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<Place />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;