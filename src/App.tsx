import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css';

import Header from './components/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <Router basename="/portfolio-website">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;



