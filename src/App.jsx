import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, Router } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Template from "./pages/Template";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
function App() {
  return (
    <div>
      {/* <Navbar />
      <Home /> */}
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/templates" element={<Template />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
