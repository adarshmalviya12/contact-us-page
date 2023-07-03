import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {MdMessage} from "react-icons/Md";
import {MdCall} from "react-icons/Md";
const ContactForm = () => {
 return (
  <section className={styles.container}>
   <div className="contact_form">
    <div className={styles.button_container}>
     <Button icon={<MdMessage fontSize={"24px"} />} text="VIA SUPPORT CHAT" />
     <Button icon={<MdCall fontSize={"24px"} />} text="VIA CALL" />
    </div>
   </div>
   <div className="contact_image"></div>
  </section>
 );
};

export default ContactForm;
