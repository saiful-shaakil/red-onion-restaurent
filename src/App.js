import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/User/Login/Login";
import Register from "./Components/User/Register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
