import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {MdEmail, MdMessage} from "react-icons/Md";
import {MdCall} from "react-icons/Md";
const ContactForm = () => {
 return (
  <section className={styles.container}>
   <div className={styles.contact_form}>
    <div className={styles.top_btn}>
     <Button icon={<MdMessage fontSize={"24px"} />} text="VIA SUPPORT CHAT" />
     <Button icon={<MdCall fontSize={"24px"} />} text="VIA CALL" />
    </div>
    <Button
     isOutline={true}
     icon={<MdEmail fontSize={"24px"} />}
     text="VIA EMAIL FORM"
    />

    <form>
     <div className={styles.form_control}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="NAME" required />
     </div>

     <div className={styles.form_control}>
      <label htmlFor="email">E-Mail</label>
      <input type="email" name="email" placeholder="E-Mail" required />
     </div>

     <div className={styles.form_control}>
      <label htmlFor="text">Text</label>
      <textarea name="text" rows="8" required />
     </div>
    </form>
    <div
     style={{
      display: "flex",
      justifyContent: "flex-end",
     }}
    >
     <Button text="SUBMIT BUTTON" />
    </div>
   </div>

   <div className={styles.contact_image}>
    <img src="images/Service 24_7.svg" alt="" />
   </div>
  </section>
 );
};

export default ContactForm;
