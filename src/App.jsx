import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { About_Us, Blog, Home, Product, Services } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="services" element={<Services />} />
        <Route path="about-us" element={<About_Us />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
