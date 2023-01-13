import React, { memo }  from "react";

import styles from './Footer.module.css';

const Footer = () => (
    <footer>
      <span className={styles.rights}>All rights reserved &copy;</span>
    </footer>
);


export default memo(Footer);