import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Create from "./pages/create/Create";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Edit from "./pages/edit/Edit";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Create />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/details/:userId" element={<Details />}></Route>
          <Route path="/edit/:userId" element={<Edit />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
