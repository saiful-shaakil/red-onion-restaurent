import { Route, Routes } from "react-router-dom";
import Cart from "./Components/CheckOut/Cart/Cart";
import Breakfast from "./Components/Home/Food/Breakfast/Breakfast";
import Dinner from "./Components/Home/Food/Dinner/Dinner";
import Lunch from "./Components/Home/Food/Lunch/Lunch";
import Footer from "./Components/Home/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import Login from "./Components/User/Login/Login";
import Register from "./Components/User/Register/Register";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route path="/lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
