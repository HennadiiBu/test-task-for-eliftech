import React from "react";
import DrugsItem from "./DrugsItem";

import css from './Drugs.module.css'

const DrugsList = ({ drugs }) => {
  return (
    <ul className={css.container}>
      {drugs?.map((drug) => (
        <DrugsItem drug={drug}/>
      ))}
    </ul>
  );
};

export default DrugsList;
