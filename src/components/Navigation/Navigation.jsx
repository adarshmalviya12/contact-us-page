import styles from "./Navigation.module.css";

const Navigation = () => {
 return (
  <div className={styles.navbarContainer}>
   <nav className={`${styles.navbar} container`}>
    <div className={styles.logo}>
     <img src="images/google.png" alt="logo" />
    </div>
    <ul className="navigationItems">
     <li>Home</li>
     <li>About</li>
     <li>Contact</li>
    </ul>
   </nav>
  </div>
 );
};

export default Navigation;
