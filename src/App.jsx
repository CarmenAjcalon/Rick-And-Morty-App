import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Locations, Episodes } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
