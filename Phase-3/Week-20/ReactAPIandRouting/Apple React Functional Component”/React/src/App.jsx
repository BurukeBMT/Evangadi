
import Footer from "./functionalComponents/Footer";
import Header from "./functionalComponents/Header";
import Iphone from "./functionalComponents/Iphone";
import Mainsection from "./functionalComponents/mainsection";
import ProductPage from "./functionalComponents/ProductPage";
import YoutubeVideos from "./functionalComponents/you tube/YoutubeVideos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainsection />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:pid" element={<ProductPage/>} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
