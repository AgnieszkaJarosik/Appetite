import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "components/Logo/Logo";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

import "fontello/css/fontello.css";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <>
      <div className={styles.imgContainer}>
        <Logo size='large' />
        <div className={styles.searchContainer}>
            <Input
              style='main'
              placeholder="Nazwa restauracji, danie lub kuchnia"
              onChange={ (value) => setTerm(value) }
            />
            <Input
              style='main'
              placeholder="Gdzie?"
              onChange={ (value) => setLocation(value) }
            />
            <Link to={{
              pathname:"/list",
              state: { term, location }
              }} 
            >
            <Button color='gold' 
                    size='large' 
            />
            </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;