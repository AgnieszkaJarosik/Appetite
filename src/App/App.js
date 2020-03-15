import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "pages/AboutPage/About";
import ListPage from "pages/ListPage/ListPage";
import HomePage from "pages/HomePage/HomePage";
import Footer from "components/Footer/Footer";
import styles from "./App.module.css";

const App = () => (
  <Router>
    <div className={styles.App}>
      <div className={styles.content}>
        <Route exact path="/" component={HomePage} />
        <Route path="/list" component={ListPage} />
        <Route path="/about" component={AboutPage} />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
