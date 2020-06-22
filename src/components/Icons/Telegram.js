import React from "react";
import styles from "./Icons.module.css";

const Telegram = () => {
  return (
    <a href="tg://resolve?domain=otosigen">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            className={styles.icon__link_hover}
            d="M0.282729 7.71437L3.96945 9.09037L5.39644 13.6795C5.48774 13.9735 5.84716 14.0821 6.08572 13.8871L8.14075 12.2118C8.35617 12.0362 8.66299 12.0275 8.88811 12.1909L12.5947 14.8819C12.8499 15.0674 13.2114 14.9276 13.2754 14.6192L15.9907 1.55837C16.0605 1.22152 15.7296 0.940506 15.4088 1.06456L0.278409 6.90141C-0.0949774 7.04541 -0.0917241 7.57405 0.282729 7.71437ZM5.16646 8.35789L12.3717 3.92019C12.5012 3.84067 12.6344 4.01576 12.5232 4.11891L6.57681 9.64637C6.3678 9.84093 6.23297 10.1013 6.19478 10.3839L5.99222 11.885C5.9654 12.0855 5.68385 12.1054 5.62854 11.9114L4.8495 9.17405C4.76028 8.86184 4.8903 8.52834 5.16646 8.35789Z"
            fill="#999999"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
export default Telegram;
