import React from 'react';
import { Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'
import { HelmetProvider } from 'react-helmet-async';

import history from './history';
import Routes from "./routes";

// Components
import Header from './components/misc/Header';
import Footer from './components/misc/Footer';

// CSS
import "./assets/css/Header.css";
import "./assets/css/Text.css";
import "./assets/css/Align.css";
import "./assets/css/Images.css";
import "./assets/css/Misc.css";
import "./assets/css/Hamburger.css";
import "./assets/css/Forms.css";
import 'rsuite/dist/styles/rsuite-default.css'
import 'react-image-lightbox/style.css';

function App() {
  return (
      <HelmetProvider>
        <ToastProvider placement="top-center" autoDismiss={true}>
            <Router history={history}>
                <Header />
                <Routes />
                <Footer />
            </Router>
        </ToastProvider>
      </HelmetProvider>
    
  );
}

export default App;
