// CSS Modules - used to avoid conflicts (scoped CSS) File must end with .module.css

import React from "react";
import styles from "./Style.module.css"; // Import CSS Module 

export default function CSSModules(){
    return(
        <>
        <h2 className={styles.title}>CSS Module Example</h2>
        <p className={styles.text}>This is Styled using CSS Modules</p>
        </>
    )
}

// here Styles are unique and won't conflict with other components