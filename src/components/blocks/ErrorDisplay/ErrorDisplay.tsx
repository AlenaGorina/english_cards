import React from "react";
import styles from "./ErrorDisplay.module.scss";

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorDisplay;
