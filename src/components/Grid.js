import styles from "../styles/GridStyles.module.css";
import Footer from "./Footer";
import NavbarDesigne from "./NavbarDesigne";

function Grid({ header, content, sidebar, title } ) {
  return (
    <div className={styles["conteinerClass"]}>
      <div className={styles["navbarConteiner"]}>
        <NavbarDesigne />
      </div>
      <div className={styles["headerConteiner"]}>
        {title}
        {header}
      </div>
      <div className={styles["contentConteiner"]}>
        <div className={styles["descriptionConteiner"]}>
          {content}
        </div>
        <div className={styles["sidebarConteiner"]}>
          {sidebar}
        </div>
      </div>
      <div className={styles["footerConteiner"]}>
        <Footer/>
      </div>
    </div>
  );
};

export default Grid;