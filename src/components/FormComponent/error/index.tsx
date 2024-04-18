// import { Grow, Typography } from '@mui/material';

// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ReactNode } from "react";
import styles from "./error.module.css";

/**
 * Input validation error message component
 *
 * @param param0
 * @returns
 */
export function Error({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.icon_container}>
          {/* <ErrorOutlineIcon className={styles.icon} /> */}
        </div>

        <p className={styles.text}>{children}</p>
      </div>
    </div>
  );
}
