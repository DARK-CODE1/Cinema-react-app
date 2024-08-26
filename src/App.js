import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

import './App.css';
import Banner from './pages/banner/banner.jsx';
import Header from './pages/header/header.jsx';
import Main from './pages/main/main.jsx';
import Footer from './pages/footer/footer.jsx';
import BackToTop from './components/backToTop/backToTop.jsx';

function App() {
    const [scroll, setScroll] = useState([0]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        });

        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY)
            });
        };
    }, [scroll])

    return (
        <>
            <Header scroll={scroll} />
            <Banner />
            <Main />
            <Footer />
            <BackToTop scroll={scroll} />
        </>
    );
}

export default App;
