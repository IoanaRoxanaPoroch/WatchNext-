import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Footer from "Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Home from "pages/Home/Home";
import Categories from "pages/Categories/Categories";
import WatchList from "pages/WatchList/WatchList";
import Contact from "pages/Contact/Contact";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import Reset from "pages/Reset/Reset";
import NotFound from "pages/NotFound/NotFound";

function App() {
  const location = useLocation();

  const pathsName = ["home", "categories", "watch-list", "contact"];

  const displayingHeaderAndFooter = pathsName.includes(
    location.pathname.substring(1)
  );

  return (
    <>
      {displayingHeaderAndFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/watch-list" element={<WatchList />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/reset" element={<Reset />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {displayingHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
