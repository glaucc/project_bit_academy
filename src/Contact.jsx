import styles from "./style";

import React from 'react'
import { Hero, Navbar } from './components'
import ContactHero from "./components/ContactHero";

const Contact = () => (
    
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ContactHero />
      </div>
    </div>
    
    
  </div>

  )

export default Contact
