import styles from "../styles/GridStyles.module.css";
import Footer from "./Footer";
import NavbarDesigne from "./NavbarDesigne";

function Grid({ header, content, lateral }) {
  return (

    <div className={styles["conteinerClass"]}>
      {/* section 1*/}
      <div className={styles["navbarConteiner"]}>
        <NavbarDesigne />
      </div>
      {/* section 2*/}
      <div className={styles["headerConteiner"]}>
        {header}
      </div>
      {/* section 3*/}
      <div className={styles["contentConteiner"]}>
        {content}
      </div>
      {/* section 4*/}
      <div className={styles["lateralConteiner"]}>
        {lateral}
      </div>
      {/* section 5*/}
      <div className={styles["footerConteiner"]}>
        <Footer />
      </div>
    </div>
  );
};

export default Grid;