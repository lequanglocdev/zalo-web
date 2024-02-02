import Home from "./pages/Home/_id";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/_id";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
