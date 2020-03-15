import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Logo from "components/Logo/Logo";
import styles from './ListPage.module.css';

const sortBy = {
  'Najtrafniejsze': 'best_match',
  'Najwyżej oceniane': 'rating',
  'Najczęściej recenzowane': 'review_count',
  'Odległość': 'distance'
};

const price = {
  '$': '1',
  '$$': '2',
  '$$$': '3',
  '$$$$': '4'
};

const SearchOptions = ({ onSubmit, ter, loc }) => {
  const [filter, setFilter] = useState({
    term: ter,
    location: loc,
    sortBy: 'best_match',
    price: '1',
    openNow: ''
  });

  const handleChange = data => {
    setFilter({
      term: data.term || filter.term,
      location: data.location || filter.location,
      sortBy: data.sortBy || filter.sortBy,
      price: data.price || filter.price,   
      openNow: typeof data.openNow==='boolean' ? data.openNow : filter.openNow  
    });
  };

  const handleInput = (e, name) => {
    const newObj = {};
    newObj[name] = e.target.value;
    handleChange( newObj );
  } 

  const toogleChange = (option, name) => {
    const newObj = {};
    option === true ? newObj[name]=false : newObj[name]=true;
    handleChange( newObj );
  }

  const renderOptions = (cat, name, option, ) => {
    return Object.keys(cat).map( item => {
      return (
        <label htmlFor={item} className={styles.container}>
          {item}
          <input
            type="radio"
            name={name}
            id={item}
            value={cat[item]}
            checked={ cat[item] === option }
            onChange={e => handleInput(e, name) }
          />
          <span className={styles.checkmark}></span>
        </label>)
    });
  }

  return (
    <>
      <div className={styles.SearchBar}>
        <Link to="/">
          <Logo size="small" />
        </Link>
        <Input placeholder="Nazwa restauracji, danie lub kuchnia"
               onChange={ value => handleChange({ term: value }) }
        />
        <Input placeholder="Gdzie?"
               onChange={ value => handleChange({ location: value }) } 
        />
        <Button color="transparent" 
                size="large"
                onClick={() => onSubmit(filter)}
        />
      </div>
      <div className={styles.filters}>
        <div className={styles.category}>
          Sortuj według:
          { renderOptions(sortBy, 'sortBy', filter.sortBy )}
        </div>
        <div className={styles.category}>
          Cena:
          { renderOptions(price, 'price', filter.price )}
        </div> 
        <div className={styles.category}>
        <label className={styles.container}>
          Otwarte teraz
          <input
            type="checkbox"
            checked={ filter.openNow === true }
            onChange={ () => toogleChange(filter.openNow, 'openNow') }
          />
          <span className={styles.checkmark}></span>
        </label>
        </div>
        <Button color="gold" 
                size="small"
                onClick={() => onSubmit(filter)}
        > 
        Zatwierdź
        </Button>
      </div>
    </>
  )
}

export default SearchOptions;