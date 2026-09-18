import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="appShell">
                <Header />
                <main className="appMain">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
