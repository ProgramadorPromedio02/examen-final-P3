import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";
import WeatherComponent from './WeatherComponent';

function SideBar() {
  const lenguajes = [
    { id: 1, nombre: 'JavaScript', visto: true },
    { id: 2, nombre: 'Python', visto: false },
    { id: 3, nombre: 'Java', visto: false },
    { id: 4, nombre: 'HTML', visto: true },
    { id: 5, nombre: 'CSS', visto: true }
  ];
  return (
    <div>
      <CustomCard content={
        <div className="text-center m-1 p-1 ">
          <h6>Para la realización de está página, se uso:</h6>
          <ul>
            {
              lenguajes.map((lenguaje) => (
                <li key={lenguaje.id}>
                  {lenguaje.nombre} {lenguaje.visto ? (<span>✔</span>) : (<span>❌</span>)}
                </li>
              ))
            }
          </ul>
        </div>
      } />
      <CustomCard content={
        <div className="text-center m-1 p-1 ">
          <h6>Algunas de nuestras recomendaciones para un Setup profesional</h6>
          <Link to="/videogames" className=" m-2 "><button type="submit" className="btn btn-primary m-2 ">Ir a la Tienda</button></Link>
        </div>
      } />
      <CustomCard content={<WeatherComponent />} />
    </div>
  );

};

export default SideBar;
