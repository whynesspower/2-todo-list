import React from "react";

// using CSS Modules now
import styles from "./Button.module.css";
// import styled from "styled-components";
// npm install --save styled-components

// by default width will be set to "auto"
// which means automatric sizing to the parent component

// when media query fails, the size will be set to 100% of the screen.

// const Button = styled.button`
//   width: 100%;

//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }
//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// you don't need to add the the below code which was just the default
// behaviour of a button. the style.button will add the button behaviour for us

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
