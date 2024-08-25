import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

import './App.css';
import Banner from './pages/banner/banner.jsx';
import Header from './pages/header/header.jsx';
import Main from './pages/main/main.jsx';
import Footer from './pages/footer/footer.jsx';

function App() {
    return (
        <>
            <Header />
            <Banner />
            <Main />
            <Footer/>
        </>
    );
}

export default App;
