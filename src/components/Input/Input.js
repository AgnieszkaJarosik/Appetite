import React from "react";
import classNames from 'classnames';
import styles from "./Input.module.css";

function Input({ placeholder, style, onChange }) {
  const classname = classNames({
    [styles.input]: true,
    [styles.main]: style==='main',
    [styles.minor]: style==='minor',
  });

  return (
    <input
      className={classname}
      placeholder={placeholder}
      onChange={ (event) => onChange(event.target.value) }
    />
  );
}

export default Input;
