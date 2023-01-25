import Main from './components/Main/index';
import Navbar from './components/Navbar/Navbar';
import './styles.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ContactForm from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
