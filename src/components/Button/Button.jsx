
import styles from "./Button.module.css";

const Button = ({icon, text}) => {
 return (
  <button className={styles.primary_btn}>
   {icon}
   <span> {text}</span>
  </button>
 );
};

export default Button;
