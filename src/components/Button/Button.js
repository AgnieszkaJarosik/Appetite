import React from "react";
import classNames from 'classnames';
import styles from "./Button.module.css";

function Button({ children, color, size, onClick}) {
  const classname = classNames({
    [styles.button]: true,
    [styles.transparent]: color==='transparent',
    [styles.gold]: color==='gold',
    [styles.small]: size==='small',
    [styles.large]: size==='large'
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onClick();
  }

  return (
    <button className={classname}
            onClick={ onClick ? handleSearch : null } >
      { children || <i className="icon-search-1"></i>}
    </button>
  );
}

export default Button;
