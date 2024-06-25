import { Routes, Route } from "react-router-dom";
import { Favorites } from "../pages/favorites";
import { Korzina } from "../pages/korzina";
import { Home } from "../pages/home";
import { Texnika } from "../Sorter/Texnika";
import { Cloth } from "../Sorter/Cloth";
import { Health } from "../Sorter/Health";
import { Shoes } from "../Sorter/Shoes";
import { Sport } from "../Sorter/Sport";
import { Search } from "../Sorter/Search";
import ScrollToTopButton from "../Components/ButtonToUp";
import { Navbar } from "../Header";
import { Profile } from "../pages/Profile";
import { Footer } from "../footer";

export const PrivatePages = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/technology" element={<Texnika />} />
        <Route path="/clothes" element={<Cloth />} />
        <Route path="/health" element={<Health />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/sport" element={<Sport />} />
      </Routes>
      <Footer />
    </div>
  );
};
