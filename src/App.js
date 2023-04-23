import "./App.css";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer.jsx';
import { Route, Routes } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import Cars from './Components/Cars/Cars';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from './Components/Auth/Register';
import ContactUsAdmin from './Components/AdminUsers/contactUs-admin';
import ClientMessages from './Components/AdminUsers/client-messages';
function App() {
  return <div className="App">
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs /> } />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ContactUsAdmin" element={<ContactUsAdmin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ClientMessages" element={<ClientMessages />} />
      </Routes>
      <Footer />
  </div>;

}

export default App;

