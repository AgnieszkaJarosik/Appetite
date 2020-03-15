import React from "react";
import classNames from 'classnames';
import styles from './Logo.module.css';

const Logo = ({ size, dark }) => {
  const classname = classNames({
    [styles.appetite]: true,
    [styles.dark]: dark,
    [styles.large]: size==='large',
    [styles.small]: size==='small',
  });

  return (
    <div className={classname}>
      <h1>appetite</h1>
    </div>
  );
}

export default Logo;
