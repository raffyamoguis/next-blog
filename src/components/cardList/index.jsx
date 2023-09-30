import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination";

function CardList() {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
}

export default CardList;
