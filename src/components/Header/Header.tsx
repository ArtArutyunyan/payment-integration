import React, { memo }  from "react";

import styles from "./Header.module.css";

const Header = () => (
    <header>
      <div>
        <span className={styles.logo}>MyMob</span>
      </div>
    </header>
  );

export default memo(Header);
