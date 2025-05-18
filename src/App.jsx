import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, Router } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Template from "./pages/Template";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import Resume1 from "./pages/CVtemplates/Template1";
import Resume2 from "./pages/CVtemplates/Template2";
import Resume3 from "./pages/CVtemplates/Template3";
import Resume4 from "./pages/CVtemplates/Template4";
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
          <Route path="template1" element={<Resume1 />} />
          <Route path="template2" element={<Resume2 />} />
          <Route path="template3" element={<Resume3 />} />
          <Route path="template4" element={<Resume4 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
