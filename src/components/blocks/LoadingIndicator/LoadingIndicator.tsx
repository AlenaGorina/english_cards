import React from "react";
import styles from "./LoadingIndicator.module.scss";

const LoadingIndicator: React.FC = () => {
  return <div className={styles.loader}>Loading...</div>;
};

export default LoadingIndicator;
