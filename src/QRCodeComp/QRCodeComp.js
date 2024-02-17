import React from "react";
import styles from "./QRCodeComp.module.css";
import QRCode from "react-qr-code";
export const QRCodeComp = ({ qrContent }) => {
  return (
    <div className={styles.divclass}>
      <QRCode value={qrContent} size={145} />
    </div>
  );
};
