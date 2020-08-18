import React from 'react';
import { Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'

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

function App() {
  return (
    <ToastProvider placement="bottom-center" autoDismiss={true}>
      <Router history={history}>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </ToastProvider>
  );
}

export default App;
