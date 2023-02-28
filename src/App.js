import Main from "./components/Main/index";
import Navbar from "./components/Navbar/Navbar";
import "./styles.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContactForm from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Helpers/ScrollToTop";
import Faq from "./components/Faq";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
