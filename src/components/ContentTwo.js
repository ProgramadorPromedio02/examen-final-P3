import React from 'react'
import CustomCard from "../components/CustomCard";
import styles from "../styles/ContentTwo.module.css";
import { Link } from 'react-router-dom';

export default function ContentTwo() {
  return (
    <>
      <div className={styles["table"]}>
        <CustomCard content={
          <div className={styles["card"]}>
            <h4>Nombre</h4>
            <span><strong>Marca:</strong> marca</span>
            <br/>
            <span><strong>Modelo:</strong> modelo</span>
            <br/>
            <span><strong>Procesador:</strong> procesador</span>
            <br/>
            <span><strong>Disco Duro:</strong> disco duro</span>
            <br/>
            <span><strong>RAM:</strong> ram</span>
            <br/>
            <span><strong>Precio: $</strong> 000</span>
            <br/>
            <Link to="/error"><button className='btn btn-primary'>Comprar</button></Link>
          </div>
        }/>
      </div>
    </>
  );
};
